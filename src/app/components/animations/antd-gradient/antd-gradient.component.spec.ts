import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntdGradientComponent } from './antd-gradient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedService } from '../../../shared/services/shared.service';

describe('AntdGradientComponent', () => {
  let component: AntdGradientComponent;
  let fixture: ComponentFixture<AntdGradientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AntdGradientComponent],
      providers: [SharedService]
    });
    fixture = TestBed.createComponent(AntdGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});