import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitlePagesComponent } from './title-pages.component';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedService } from '../../shared/services/shared.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('TitlePagesComponent', () => {
  let component: TitlePagesComponent;
  let fixture: ComponentFixture<TitlePagesComponent>;
  let translateServiceStub: Partial<TranslateService>;

  beforeEach(() => {
    translateServiceStub = {
      get: jasmine.createSpy('get').and.returnValue(of(''))
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TitlePagesComponent],
      providers: [
        { provide: TranslateService, useValue: translateServiceStub },
        SharedService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(TitlePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});