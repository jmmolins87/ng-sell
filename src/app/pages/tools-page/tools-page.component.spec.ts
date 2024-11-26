import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolsPageComponent } from './tools-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PagesService } from '../../services/pages-service.service';
import { SharedService } from '../../shared/services/shared.service';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ToolsPageComponent', () => {
  let component: ToolsPageComponent;
  let fixture: ComponentFixture<ToolsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      declarations: [ToolsPageComponent],
      providers: [PagesService, SharedService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ToolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});