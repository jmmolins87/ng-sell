import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolComponent } from './tool.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedService } from '../../shared/services/shared.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ToolComponent', () => {
  let component: ToolComponent;
  let fixture: ComponentFixture<ToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CardModule, ButtonModule, TranslateModule.forRoot(), RouterTestingModule],
      declarations: [ToolComponent],
      providers: [SharedService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ToolComponent);
    component = fixture.componentInstance;
    component.tool = { 
      id: 1,
      title: 'Mock Title',
      subtitle: 'Mock Subtitle',
      link: 'http://mocklink.com',
      description: 'Mock Description',
      tags: [],
      categories: [],
      favorite: false,
      image: '',
      skill: 0,
      restSkill: 0,
      web: ''
    }; // Provide mock tool data here
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});