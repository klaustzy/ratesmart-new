import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubmitP3Component } from './user-submit-p3.component';

describe('UserSubmitP3Component', () => {
  let component: UserSubmitP3Component;
  let fixture: ComponentFixture<UserSubmitP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSubmitP3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubmitP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
