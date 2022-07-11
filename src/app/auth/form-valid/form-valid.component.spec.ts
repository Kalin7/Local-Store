import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidComponent } from './form-valid.component';

describe('FormValidComponent', () => {
  let component: FormValidComponent;
  let fixture: ComponentFixture<FormValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
