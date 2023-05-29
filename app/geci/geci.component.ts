import { Component } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { CartService } from '../cart.service';
import { geci } from '../Models/geci';

@Component({
  selector: 'app-geci',
  templateUrl: './geci.component.html',
  styleUrls: ['./geci.component.css']
})
export class GeciComponent {
  selectedSize: any;
  geciFromDB: geci[]=[];
  cartItems:geci[]=[];
  marime:string='';
  constructor(private productService:ProductServiceService,private cartService:CartService){
    this.getGeci(); 
  }
  getGeci(){
    this.productService.getGeci().subscribe(result=>{this.geciFromDB=result})
  }
  addToCart(geci:geci) {
    geci.marime=this.marime;
    this.cartService.addToCartCuMarime(geci.id, geci.Nume,geci.Imagine, geci.Pret, geci.marime);
    this.cartItems.push(geci);
  }
  MarimeS(geci: any) {
    this.selectedSize = geci;
  }
  
  MarimeM(geci: any) {
    this.selectedSize = geci;
  }
  
  MarimeL(geci: any) {
    this.selectedSize = geci;
  }
  setSelectedSize(geci: any, size: string) {
    this.selectedSize = geci;
    this.marime = size;
  }

}
