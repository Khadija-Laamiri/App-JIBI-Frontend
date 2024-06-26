import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAgentComponent } from './dashboardAgent.component';

describe('DashboardComponent', () => {
  let component: DashboardAgentComponent;
  let fixture: ComponentFixture<DashboardAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
