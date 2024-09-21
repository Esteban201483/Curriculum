import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalTitleComponent } from './personal-title.component';

describe('PersonalTitleComponent', () => {
  let component: PersonalTitleComponent;
  let fixture: ComponentFixture<PersonalTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
