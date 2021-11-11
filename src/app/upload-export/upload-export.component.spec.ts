import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadExportComponent } from './upload-export.component';

describe('UploadExportComponent', () => {
  let component: UploadExportComponent;
  let fixture: ComponentFixture<UploadExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
