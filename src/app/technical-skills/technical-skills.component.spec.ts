import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TechnicalSkillsComponent } from './technical-skills.component';

describe('TechnicalSkillsComponent', () => {
  let component: TechnicalSkillsComponent;
  let fixture: ComponentFixture<TechnicalSkillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
