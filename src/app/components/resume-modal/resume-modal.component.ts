import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
  inject,
  signal
} from '@angular/core';
import type { PDFDocumentProxy, RenderTask } from 'pdfjs-dist';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

@Component({
  selector: 'app-resume-modal',
  standalone: true,
  templateUrl: './resume-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeModalComponent implements AfterViewInit, OnDestroy {
  readonly i18n = inject(PortfolioPreferencesService);
  @ViewChild('pdfPages', { static: true }) private readonly pdfPages!: ElementRef<HTMLDivElement>;
  @Output() readonly closed = new EventEmitter<void>();
  readonly loading = signal(true);
  readonly error = signal(false);

  private document?: PDFDocumentProxy;
  private pdfjs?: typeof import('pdfjs-dist');
  private readonly renderTasks: RenderTask[] = [];
  private resizeObserver?: ResizeObserver;
  private observedWidth = 0;

  async ngAfterViewInit(): Promise<void> {
    this.resizeObserver = new ResizeObserver(entries => {
      const width = entries[0]?.contentRect.width ?? 0;
      if (width > 0 && width !== this.observedWidth) {
        this.observedWidth = width;
        void this.renderPages();
      }
    });
    this.resizeObserver.observe(this.pdfPages.nativeElement);

    try {
      this.pdfjs = await import('pdfjs-dist');
      this.pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
      this.document = await this.pdfjs.getDocument('/cv.pdf').promise;
      await this.renderPages();
    } catch (error) {
      console.error('No se pudo cargar la vista previa del CV.', error);
      this.error.set(true);
      this.loading.set(false);
    }
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.cancelRenderTasks();
    void this.document?.destroy();
  }

  private async renderPages(): Promise<void> {
    const document = this.document;
    const container = this.pdfPages.nativeElement;
    const width = container.clientWidth;
    if (!document || width === 0) {
      return;
    }

    this.cancelRenderTasks();
    container.replaceChildren();
    this.loading.set(true);
    this.error.set(false);

    try {
      for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber++) {
        const page = await document.getPage(pageNumber);
        const unscaledViewport = page.getViewport({ scale: 1 });
        const scale = Math.min(width / unscaledViewport.width, 1.5);
        const viewport = page.getViewport({ scale });
        const outputScale = Math.min(window.devicePixelRatio || 1, 2);
        const canvas = window.document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (!context) {
          throw new Error('El navegador no pudo crear el canvas del visor PDF.');
        }

        canvas.className = 'mx-auto block h-auto max-w-full bg-white shadow-xl';
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;
        container.append(canvas);

        const renderTask = page.render({
          canvasContext: context,
          viewport,
          ...(outputScale === 1 ? {} : { transform: [outputScale, 0, 0, outputScale, 0, 0] })
        });
        this.renderTasks.push(renderTask);
        await renderTask.promise;
      }
      this.loading.set(false);
    } catch (error) {
      if (error instanceof Error && error.name === 'RenderingCancelledException') {
        return;
      }
      console.error('No se pudo representar el CV en el visor integrado.', error);
      this.error.set(true);
      this.loading.set(false);
    }
  }

  private cancelRenderTasks(): void {
    for (const task of this.renderTasks) {
      task.cancel();
    }
    this.renderTasks.length = 0;
  }
}
