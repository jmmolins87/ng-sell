import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedService } from './shared/services/shared.service';
import { CookieService } from 'ngx-cookie-service';
import { PrimeNGConfig } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let sharedServiceStub: Partial<SharedService>;
  let cookieServiceStub: Partial<CookieService>;
  let primengConfigStub: Partial<PrimeNGConfig>;

  beforeEach(() => {
    sharedServiceStub = {
      itemsDial: of([]),
      darkMode$: of(false)
    };

    cookieServiceStub = {
      set: jasmine.createSpy('set'),
      get: jasmine.createSpy('get').and.returnValue('true'),
      check: jasmine.createSpy('check').and.returnValue(true)
    };

    primengConfigStub = {
      ripple: true
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        { provide: SharedService, useValue: sharedServiceStub },
        { provide: CookieService, useValue: cookieServiceStub },
        { provide: PrimeNGConfig, useValue: primengConfigStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});