import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ContactPageComponent } from './contact-page.component';
import { SharedService } from '../../shared/services/shared.service';
import { EmailService } from '../../services/email-serivce.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;
  let sharedServiceStub: Partial<SharedService>;
  let emailServiceStub: Partial<EmailService>;

  beforeEach(() => {
    sharedServiceStub = {
      darkMode$: of(false)
    };
    emailServiceStub = {};

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, TranslateModule.forRoot()],
      declarations: [ContactPageComponent],
      providers: [
        FormBuilder,
        { provide: SharedService, useValue: sharedServiceStub },
        { provide: EmailService, useValue: emailServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.formContact).toBeDefined();
    expect(component.formContact.controls['name']).toBeDefined();
    expect(component.formContact.controls['email']).toBeDefined();
    expect(component.formContact.controls['message']).toBeDefined();
  });

  it('should have default values in the form', () => {
    const formValues = component.formContact.value;
    expect(formValues.name).toBe('');
    expect(formValues.email).toBe('');
    expect(formValues.message).toBe('');
  });
});