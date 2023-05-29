import { Component } from '@angular/core';
import { pulovere } from '../Models/pulovere';
import { ProductServiceService } from '../Services/product-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pulovere',
  templateUrl: './pulovere.component.html',
  styleUrls: ['./pulovere.component.css']
})
export class PulovereComponent {
  selectedSize: any;
  pulovereFromDB: pulovere[]=[];
  cartItems:pulovere[]=[];
  marime:string='';
  constructor(private productService:ProductServiceService,private cartService:CartService){
    this.getPulovere(); 
  }
  getPulovere(){
    this.productService.getPulovere().subscribe(result=>{this.pulovereFromDB=result})
  }
  addToCart(pulovere:pulovere) {
   pulovere.marime=this.marime;
    this.cartService.addToCartCuMarime(pulovere.id, pulovere.Nume,pulovere.Imagine, pulovere.Pret, pulovere.marime);
    this.cartItems.push(pulovere);
  }
  MarimeS(pulovere: any) {
    this.selectedSize = pulovere;
  }
  
  MarimeM(pulovere: any) {
    this.selectedSize = pulovere;
  }
  
  MarimeL(pulovere: any) {
    this.selectedSize = pulovere;
  }
  setSelectedSize(pulovere: any, size: string) {
    this.selectedSize = pulovere;
    this.marime = size;
  }
}
