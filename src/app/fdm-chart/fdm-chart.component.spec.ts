import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdmChartComponent } from './fdm-chart.component';

describe('FdmChartComponent', () => {
  let component: FdmChartComponent;
  let fixture: ComponentFixture<FdmChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdmChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
