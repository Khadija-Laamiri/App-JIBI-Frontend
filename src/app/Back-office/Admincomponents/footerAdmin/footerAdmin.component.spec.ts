import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAdminComponent } from './footerAdmin.component';

describe('FooterComponent', () => {
  let component: FooterAdminComponent;
  let fixture: ComponentFixture<FooterAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
