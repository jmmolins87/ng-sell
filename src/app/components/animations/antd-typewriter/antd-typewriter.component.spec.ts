import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntdTypewriterComponent } from './antd-typewriter.component';

describe('AntdTypewriterComponent', () => {
  let component: AntdTypewriterComponent;
  let fixture: ComponentFixture<AntdTypewriterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntdTypewriterComponent]
    });
    fixture = TestBed.createComponent(AntdTypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});