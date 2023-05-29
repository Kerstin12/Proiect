import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluzeComponent } from './bluze.component';

describe('BluzeComponent', () => {
  let component: BluzeComponent;
  let fixture: ComponentFixture<BluzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BluzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
