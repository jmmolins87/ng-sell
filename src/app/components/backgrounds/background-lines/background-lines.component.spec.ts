import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundLinesComponent } from './background-lines.component';

describe('BackgroundLinesComponent', () => {
  let component: BackgroundLinesComponent;
  let fixture: ComponentFixture<BackgroundLinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundLinesComponent]
    });
    fixture = TestBed.createComponent(BackgroundLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
