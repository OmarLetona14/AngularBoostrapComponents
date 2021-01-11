import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidstatsComponent } from './covidstats.component';

describe('CovidstatsComponent', () => {
  let component: CovidstatsComponent;
  let fixture: ComponentFixture<CovidstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidstatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
