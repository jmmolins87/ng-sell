import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedService } from '../../../shared/services/shared.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, EventEmitter } from '@angular/core';
import { LangChangeEvent, TranslationChangeEvent, DefaultLangChangeEvent } from '@ngx-translate/core';
import { of } from 'rxjs';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let translateServiceStub: Partial<TranslateService>;

  beforeEach(() => {
    translateServiceStub = {
      get: jasmine.createSpy('get').and.returnValue(of('')),
      setDefaultLang: jasmine.createSpy('setDefaultLang'),
      use: jasmine.createSpy('use'),
      addLangs: jasmine.createSpy('addLangs'),
      stream: jasmine.createSpy('stream').and.returnValue(of('')),
      instant: jasmine.createSpy('instant').and.returnValue(''),
      onLangChange: new EventEmitter<LangChangeEvent>(), // Add onLangChange EventEmitter
      onTranslationChange: new EventEmitter<TranslationChangeEvent>(), // Add onTranslationChange EventEmitter
      onDefaultLangChange: new EventEmitter<DefaultLangChangeEvent>() // Add onDefaultLangChange EventEmitter
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, TranslateModule.forRoot()],
      declarations: [NavBarComponent],
      providers: [
        SharedService,
        { provide: TranslateService, useValue: translateServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});