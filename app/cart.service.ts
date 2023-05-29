import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cart: any = { items: [], total: 0 };

  constructor() { }

  addToCartCuMarime(id: number, name: string,image:string, price: number, marime:string, quantity: number = 1) {
    let addedItem = this.cart.items.find((i: any) => i.id === id && i.Pret === price);
    if (addedItem) {
      addedItem.quantity += quantity;
      addedItem.marime=marime;
    } else {
      this.cart.items.push({ id, name,image, price,marime, quantity });
    }
    this.cart.total += price * quantity;
  }
  addToCart(id: number, name: string,image:string, price: number,  quantity: number = 1) {
    let addedItem = this.cart.items.find((i: any) => i.id === id && i.price === price);
    if (addedItem) {
      addedItem.quantity += quantity;
    } else {
      this.cart.items.push({ id, name,image, price,quantity });
    }
    this.cart.total += price * quantity;
  }
  increaseQuantity(item: any) {
    item.quantity++;
    this.cart.total += item.price;
  }

  decreaseQuantity(item: any) {
    if (item.Cantitate > 1) {
      item.quantity--;
      this.cart.total -= item.price;
    }
  }
  
  removeFromCart(item: any) {
    let index = this.cart.items.findIndex((i: any) => i.id === item.id && i.price === item.price);
    if (index !== -1) {
      let removedItem = this.cart.items.splice(index, 1)[0];
      this.cart.total -= removedItem.price * removedItem.quantity;
    }
  }

  getCart() {
    return this.cart;
  }
}