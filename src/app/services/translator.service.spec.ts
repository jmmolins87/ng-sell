import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslatorService } from './translator.service';

describe('TranslatorService', () => {
  let service: TranslatorService;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TranslateService', ['setDefaultLang', 'use', 'addLangs']);

    TestBed.configureTestingModule({
      providers: [
        TranslatorService,
        { provide: TranslateService, useValue: spy }
      ]
    });

    service = TestBed.inject(TranslatorService);
    translateServiceSpy = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set default language to "es" on initialization', () => {
    expect(translateServiceSpy.setDefaultLang).toHaveBeenCalledWith('es');
    expect(translateServiceSpy.use).toHaveBeenCalledWith('es');
    expect(translateServiceSpy.addLangs).toHaveBeenCalledWith(['es', 'en']);
  });

  it('should change language', () => {
    service.changeLang('en');
    expect(translateServiceSpy.use).toHaveBeenCalledWith('en');
  });
});