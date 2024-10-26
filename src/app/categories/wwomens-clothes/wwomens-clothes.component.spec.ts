import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwomensClothesComponent } from './wwomens-clothes.component';

describe('WwomensClothesComponent', () => {
  let component: WwomensClothesComponent;
  let fixture: ComponentFixture<WwomensClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WwomensClothesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WwomensClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
