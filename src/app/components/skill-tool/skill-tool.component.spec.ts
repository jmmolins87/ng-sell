import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillToolComponent } from './skill-tool.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedService } from '../../shared/services/shared.service';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SkillToolComponent', () => {
  let component: SkillToolComponent;
  let fixture: ComponentFixture<SkillToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      declarations: [SkillToolComponent],
      providers: [SharedService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(SkillToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});