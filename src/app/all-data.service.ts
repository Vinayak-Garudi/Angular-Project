import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllDataService {
  cart: any = []
  constructor() { }
  getAllData() {
    return {
      username: "Vinayak",
      cart: this.cart
    }
  }

  addToCart(val: string) {
    this.cart.push(val)
  }

  clearCart() {
    this.cart = []
  }
}
