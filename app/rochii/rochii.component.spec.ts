import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RochiiComponent } from './rochii.component';

describe('RochiiComponent', () => {
  let component: RochiiComponent;
  let fixture: ComponentFixture<RochiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RochiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RochiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
