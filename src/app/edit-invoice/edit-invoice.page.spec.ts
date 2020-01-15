import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvoicePage } from './edit-invoice.page';

describe('EditInvoicePage', () => {
  let component: EditInvoicePage;
  let fixture: ComponentFixture<EditInvoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInvoicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInvoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
