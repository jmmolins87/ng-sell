import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutPageComponent } from './about-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedService } from '../../shared/services/shared.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AboutPageComponent],
      providers: [SharedService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});