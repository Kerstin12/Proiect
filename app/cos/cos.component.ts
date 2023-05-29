import { Component } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.css']
})
export class CosComponent {
  cart: any;

  constructor(private cartService: CartService) {
    this.cart = cartService.getCart();
}
increaseQuantity(item: any) {
  this.cartService.increaseQuantity(item);
  this.cart = this.cartService.getCart();
}

decreaseQuantity(item: any) {
  this.cartService.decreaseQuantity(item);
  this.cart = this.cartService.getCart();
}

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cart = this.cartService.getCart();
  }
}

