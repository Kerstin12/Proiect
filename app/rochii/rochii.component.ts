import { Component } from '@angular/core';
import { rochii } from '../Models/rochii';
import { ProductServiceService } from '../Services/product-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-rochii',
  templateUrl: './rochii.component.html',
  styleUrls: ['./rochii.component.css']
})
export class RochiiComponent {
  selectedSize: any;
  rochiiFromDB: rochii[]=[];
  cartItems:rochii[]=[];
  marime:string='';
  constructor(private productService:ProductServiceService,private cartService:CartService){
    this.getRochii(); 
  }
  getRochii(){
    this.productService.getRochii().subscribe(result=>{this.rochiiFromDB=result})
  }
  addToCart(rochii:rochii) {
    rochii.marime=this.marime;
    this.cartService.addToCartCuMarime(rochii.id, rochii.Nume,rochii.Imagine, rochii.Pret, rochii.marime);
    this.cartItems.push(rochii);
  }
  MarimeS(rochii: any) {
    this.selectedSize = rochii;
  }
  
  MarimeM(rochii: any) {
    this.selectedSize = rochii;
  }
  
  MarimeL(rochii: any) {
    this.selectedSize = rochii;
  }
  setSelectedSize(rochii: any, size: string) {
    this.selectedSize = rochii;
    this.marime = size;
  }
}