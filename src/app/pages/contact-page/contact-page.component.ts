import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SharedService } from '../../shared/services/shared.service';
import { PagesService } from '../../services/pages-service.service';

import { titleTypes } from '../../components/title-pages/title.config';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  // Dark Theme
  public isDarkMode: boolean = false;
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
  // Text error fields
  public textError: string = 'Este campo es requerido';
  // Set the title of the page
  public formContact: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: [''],
    company: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(this.maxCharacters)]]
  });
  
  constructor ( 
    private _sharedService: SharedService, 
    private _fb: FormBuilder,
    private _validatorsService: PagesService ) { }

  ngOnInit() {
    this.resetFormError();
    this.darkMode();
  }

  // Function to get the dark mode status
  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  // Los gets sirven para poder acceder a los campos del formulario de una forma más sencilla y rápida.
  get name() { return this.formContact.get('name'); }
  get surname() { return this.formContact.get('surname'); }
  get company() { return this.formContact.get('company'); }
  get email() { return this.formContact.get('email'); }
  get phone() { return this.formContact.get('phone'); }
  get subject() { return this.formContact.get('subject'); }
  get message() { return this.formContact.get('message'); }

  resetFormError() { this.formContact.reset(); }
  updateCounter() { this.characterCount = this.messageCharactres.length; }

  isValidField( field: string ): boolean | null {
    return this._validatorsService.isValidField(this.formContact, field);
  }

  getFieldError( field: string ): string | null {

    if(!this.formContact.controls[field]) return null;
    const errors = this.formContact.controls[field].errors || {};
    for ( const key of Object.keys( errors ) ) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
          break;
        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } carácteres`;
          break;
        default:
          break;
      }
    }
    return null;
  }

}
