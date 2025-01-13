import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubmitP4Component } from './user-submit-p4.component';

describe('UserSubmitP4Component', () => {
  let component: UserSubmitP4Component;
  let fixture: ComponentFixture<UserSubmitP4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSubmitP4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubmitP4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
