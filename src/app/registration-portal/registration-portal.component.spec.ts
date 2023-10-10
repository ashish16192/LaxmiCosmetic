import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPortalComponent } from './registration-portal.component';

describe('RegistrationPortalComponent', () => {
  let component: RegistrationPortalComponent;
  let fixture: ComponentFixture<RegistrationPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationPortalComponent]
    });
    fixture = TestBed.createComponent(RegistrationPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
