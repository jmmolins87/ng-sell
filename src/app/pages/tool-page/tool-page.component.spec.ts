import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolPageComponent } from './tool-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedService } from '../../shared/services/shared.service';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ToolPageComponent', () => {
  let component: ToolPageComponent;
  let fixture: ComponentFixture<ToolPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, TranslateModule.forRoot()],
      declarations: [ToolPageComponent],
      providers: [SharedService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ToolPageComponent);
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
      web: 'Mock Web',
      // Add other required properties with mock data
      // Assuming the other properties are optional or can be mocked with default values
    }; // Provide mock tool data here
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});