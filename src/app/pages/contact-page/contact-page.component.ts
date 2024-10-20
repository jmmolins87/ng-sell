import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { titleTypes } from '../../components/title-pages/title.config';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  // Show or hide the skeleton loader
  public showSkeleton: boolean = false;
  // Show or hide the form
  public messageCharactres: string = '';
  // Initialize the character count to 0
  public characterCount: number = 0;
  // Set the maximum number of characters allowed in the message
  public maxCharacters: number = 1000;
  // Set the title of the page
  public titleType: titleTypes = titleTypes.h1;
  // Set the title of the page
  public formContact: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: [''],
    company: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(this.maxCharacters)]]
  });
  
  constructor ( private fb: FormBuilder) {
  }

  ngOnInit() {
    this.resetFormError();
  }

  // Los gets sirven para poder acceder a los campos del formulario de una forma más sencilla y rápida.
  get name() {
    return this.formContact.get('name');
  }

  get surname() {
    return this.formContact.get('surname');
  }

  get company() {
    return this.formContact.get('company');
  }

  get email() {
    return this.formContact.get('email');
  }

  get phone() {
    return this.formContact.get('phone');
  }

  get subject() {
    return this.formContact.get('subject');
  }

  get message() {
    return this.formContact.get('message');
  }

  resetFormError() {
    this.formContact.reset();
  }

  updateCounter() {
    this.characterCount = this.messageCharactres.length;
  }

}
