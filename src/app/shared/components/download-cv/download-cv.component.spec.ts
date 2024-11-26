import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DownloadCvComponent } from './download-cv.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedService } from '../../../shared/services/shared.service';
import { ToastModule } from 'primeng/toast';

describe('DownloadCvComponent', () => {
  let component: DownloadCvComponent;
  let fixture: ComponentFixture<DownloadCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastModule],
      declarations: [DownloadCvComponent],
      providers: [SharedService]
    });
    fixture = TestBed.createComponent(DownloadCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});