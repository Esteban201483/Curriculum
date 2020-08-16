import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftKillsComponent } from './soft-kills.component';

describe('SoftKillsComponent', () => {
  let component: SoftKillsComponent;
  let fixture: ComponentFixture<SoftKillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftKillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftKillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
