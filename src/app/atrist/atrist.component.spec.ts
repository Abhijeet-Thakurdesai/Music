/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtristComponent } from './atrist.component';

describe('AtristComponent', () => {
  let component: AtristComponent;
  let fixture: ComponentFixture<AtristComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtristComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
