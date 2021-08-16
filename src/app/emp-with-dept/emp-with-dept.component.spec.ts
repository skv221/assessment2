import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpWithDeptComponent } from './emp-with-dept.component';

describe('EmpWithDeptComponent', () => {
  let component: EmpWithDeptComponent;
  let fixture: ComponentFixture<EmpWithDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpWithDeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpWithDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
