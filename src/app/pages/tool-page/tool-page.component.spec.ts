import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolComponent } from './tool-page.component';

describe('ToolComponent', () => {
  let component: ToolComponent;
  let fixture: ComponentFixture<ToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolComponent]
    });
    fixture = TestBed.createComponent(ToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
