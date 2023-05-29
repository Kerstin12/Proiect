import { Component } from '@angular/core';
import { tricouri } from '../Models/tricouri';
import { ProductServiceService } from '../Services/product-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tricouri',
  templateUrl: './tricouri.component.html',
  styleUrls: ['./tricouri.component.css']
})
export class TricouriComponent {
  selectedSize: any;
  tricouriFromDB:tricouri[]=[];
  cartItems:tricouri[]=[];
  marime:string='';
  constructor(private productService:ProductServiceService,private cartService:CartService){
    this.getTricouri(); 
  }
  getTricouri(){
    this.productService.getTricouri().subscribe(result=>{this.tricouriFromDB=result})
  }
  addToCart(tricouri:tricouri) {
    tricouri.marime=this.marime;
    this.cartService.addToCartCuMarime(tricouri.id, tricouri.Nume,tricouri.Imagine, tricouri.Pret, tricouri.marime);
    this.cartItems.push(tricouri);
  }
  MarimeS(tricouri: any) {
    this.selectedSize = tricouri;
  }
  
  MarimeM(tricouri: any) {
    this.selectedSize = tricouri;
  }
  
  MarimeL(tricouri: any) {
    this.selectedSize = tricouri;
  }
  setSelectedSize(tricouri: any, size: string) {
    this.selectedSize = tricouri;
    this.marime = size;
  }
}