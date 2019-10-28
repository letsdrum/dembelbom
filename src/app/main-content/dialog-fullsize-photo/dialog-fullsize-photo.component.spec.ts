import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFullsizePhotoComponent } from './dialog-fullsize-photo.component';

describe('DialogFullsizePhotoComponent', () => {
  let component: DialogFullsizePhotoComponent;
  let fixture: ComponentFixture<DialogFullsizePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFullsizePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFullsizePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
