import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePagesComponent } from './title-pages.component';

describe('TitlePagesComponent', () => {
  let component: TitlePagesComponent;
  let fixture: ComponentFixture<TitlePagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitlePagesComponent]
    });
    fixture = TestBed.createComponent(TitlePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
