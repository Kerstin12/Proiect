import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamasiComponent } from './camasi.component';

describe('CamasiComponent', () => {
  let component: CamasiComponent;
  let fixture: ComponentFixture<CamasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamasiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
