import { Component, Input, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-download-cv',
  templateUrl: './download-cv.component.html',
  styleUrls: ['./download-cv.component.scss'],
  providers: [MessageService]
})
export class DownloadCvComponent implements OnInit {

  // Dark Theme
  public isDarkMode: boolean = false;
  // Loading
  public loading: boolean = false;
  // Prgress bar
  public progress: number = 0;
  // Content Toast
  public successsTitleToast: string = '¡¡Bien!!';
  public successsMessageToast: string = 'Descarga completada';
  public errorTitleToast: string = '¡¡Ups!!';
  public errorMessageToast: string = 'Falló la descarga';

  @Input() 
  fileName!: string; // File name
  @Input() 
  filePath!: string; // File path
  @Input()
  buttonText!: string; // Button text

  constructor( private _sharedService: SharedService, private _messageService: MessageService) {}

  ngOnInit(): void {
    this.darkMode();
  }

  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

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
      // this._messageService.add({ severity: 'error', summary: this.errorTitleToast, detail: this.errorMessageToast });
      this.loading = false;
      clearInterval(interval);
    }
  }
  
  completeDownload() {
    this.loading = false;
    // this._messageService.add({ severity: 'success', summary: this.successsTitleToast, detail: this.successsMessageToast });
  }

}
