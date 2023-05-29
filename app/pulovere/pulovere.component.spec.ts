import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulovereComponent } from './pulovere.component';

describe('PulovereComponent', () => {
  let component: PulovereComponent;
  let fixture: ComponentFixture<PulovereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulovereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulovereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
