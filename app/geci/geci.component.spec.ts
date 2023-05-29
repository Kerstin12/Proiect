import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeciComponent } from './geci.component';

describe('GeciComponent', () => {
  let component: GeciComponent;
  let fixture: ComponentFixture<GeciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
