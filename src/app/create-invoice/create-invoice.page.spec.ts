import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvoicePage } from './create-invoice.page';

describe('CreateInvoicePage', () => {
  let component: CreateInvoicePage;
  let fixture: ComponentFixture<CreateInvoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInvoicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInvoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
