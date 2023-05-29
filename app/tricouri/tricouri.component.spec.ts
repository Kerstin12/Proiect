import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TricouriComponent } from './tricouri.component';

describe('TricouriComponent', () => {
  let component: TricouriComponent;
  let fixture: ComponentFixture<TricouriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TricouriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TricouriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
