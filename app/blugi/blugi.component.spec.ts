import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlugiComponent } from './blugi.component';

describe('BlugiComponent', () => {
  let component: BlugiComponent;
  let fixture: ComponentFixture<BlugiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlugiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlugiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
