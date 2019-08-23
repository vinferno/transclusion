import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAbilityComponent } from './users-ability.component';

describe('UsersAbilityComponent', () => {
  let component: UsersAbilityComponent;
  let fixture: ComponentFixture<UsersAbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
