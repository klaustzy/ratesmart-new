import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubmitP1Component } from './user-submit-p1.component';

describe('UserSubmitP1Component', () => {
  let component: UserSubmitP1Component;
  let fixture: ComponentFixture<UserSubmitP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSubmitP1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubmitP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
