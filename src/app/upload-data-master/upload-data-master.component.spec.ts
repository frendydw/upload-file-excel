import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDataMasterComponent } from './upload-data-master.component';

describe('UploadImportComponent', () => {
  let component: UploadDataMasterComponent;
  let fixture: ComponentFixture<UploadDataMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDataMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDataMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
