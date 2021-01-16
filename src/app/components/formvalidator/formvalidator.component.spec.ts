import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalidatorComponent } from './formvalidator.component';

describe('FormvalidatorComponent', () => {
  let component: FormvalidatorComponent;
  let fixture: ComponentFixture<FormvalidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormvalidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
