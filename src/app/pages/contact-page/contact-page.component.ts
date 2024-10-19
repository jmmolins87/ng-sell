import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailService } from '../../services/email-serivce.service';

import { MessageService } from 'primeng/api';

import { titleTypes } from '../../components/title-pages/title.config';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  providers: [MessageService]
})
export class ContactPageComponent {

  public isFullWidth: boolean = false;
  public titleType: titleTypes = titleTypes.h1;
  public title!: string;
  public contactForm: FormGroup;

  constructor( 
    private fb: FormBuilder, 
    private _emailService: EmailService, 
    private _messageService: MessageService ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this._emailService.sendEmail(this.contactForm.value).subscribe(
        response => {
          this.showToast('Email sent successfully!', 'success');
        },
        error => {
          this.showToast('Failed to send email.', 'error');
        }
      );
    }
  }

  showToast(message: string, severity: string) {
    this._messageService.add({ severity, summary: 'Notification', detail: message });
  }

}
