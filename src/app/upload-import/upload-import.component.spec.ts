import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImportComponent } from './upload-import.component';

describe('UploadImportComponent', () => {
  let component: UploadImportComponent;
  let fixture: ComponentFixture<UploadImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
