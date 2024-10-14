import { Component, Input } from '@angular/core';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss'],
  providers: [MessageService]
})
export class DownloadButtonComponent {

  public loading: boolean = false;
  public progress: number = 0;

  public successsTitleToast: string = '¡¡Bien!!';
  public successsMessageToast: string = '¡¡Descarga completada!!';
  public errorTitleToast: string = '¡¡Error!!';
  public errorMessageToast: string = 'Falló en la descarga!!';

  @Input() 
  fileName!: string;
  @Input() 
  filePath!: string;
  @Input()
  buttonText!: string; // Button text

  constructor( private _messageService: MessageService ) {}

  downloadFile() {
    this.loading = true;
    this.progress = 0;
    const interval = setInterval(() => {
      this.progress += 20;
      if (this.progress >= 100) {
        clearInterval(interval);
        this.completeDownload();
      }
    }, 100);

    try {
      // Trigger file download
      const link = document.createElement('a');
      link.href = this.filePath;
      link.download = this.fileName;
      link.click();
    } catch (error) {
      this._messageService.add({ severity: 'error', summary: this.errorTitleToast, detail: 'Download failed!' });
      this.loading = false;
      clearInterval(interval);
    }
  }

  completeDownload() {
    this.loading = false;
    this._messageService.add({ severity: 'success', summary: this.successsTitleToast, detail: this.successsMessageToast });
  }

  showSuccessToast(detail: string) {
    this._messageService.add({ severity: 'success', summary: this.successsTitleToast, detail });
  }
  
  showErrorToast(detail: string) {
    this._messageService.add({ severity: 'error', summary: this.errorTitleToast, detail });
  }
}

