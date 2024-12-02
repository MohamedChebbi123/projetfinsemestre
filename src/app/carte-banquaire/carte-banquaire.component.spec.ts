import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteBanquaireComponent } from './carte-banquaire.component';

describe('CarteBanquaireComponent', () => {
  let component: CarteBanquaireComponent;
  let fixture: ComponentFixture<CarteBanquaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarteBanquaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteBanquaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
