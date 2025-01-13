import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubmitP2Component } from './user-submit-p2.component';

describe('UserSubmitP2Component', () => {
  let component: UserSubmitP2Component;
  let fixture: ComponentFixture<UserSubmitP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSubmitP2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubmitP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
