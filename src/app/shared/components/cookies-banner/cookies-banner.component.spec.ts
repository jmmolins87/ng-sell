import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookiesBannerComponent } from './cookies-banner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedService } from '../../../shared/services/shared.service';
import { TranslateModule } from '@ngx-translate/core';

describe('CookiesBannerComponent', () => {
  let component: CookiesBannerComponent;
  let fixture: ComponentFixture<CookiesBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      declarations: [CookiesBannerComponent],
      providers: [SharedService]
    });
    fixture = TestBed.createComponent(CookiesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});