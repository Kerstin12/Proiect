import { Component } from '@angular/core';
import { dress } from '../Models/dress';
import { ProductServiceService } from '../Services/product-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-bluze',
  templateUrl: './bluze.component.html',
  styleUrls: ['./bluze.component.css']
})
export class BluzeComponent {
  selectedSize: any;
  dressesFromDB: dress[]=[];
  cartItems:dress[]=[];
  marime:string='';
  constructor(private productService:ProductServiceService,private cartService:CartService){
    this.getDress(); 
  }
  getDress(){
    this.productService.getDress().subscribe(result=>{this.dressesFromDB=result})
  }
  addToCart(dress:dress) {
    dress.marime=this.marime;
    this.cartService.addToCartCuMarime(dress.id, dress.Nume,dress.Imagine, dress.Pret, dress.marime);
    this.cartItems.push(dress);
  }
  MarimeS(dress: any) {
    this.selectedSize = dress;
  }
  
  MarimeM(dress: any) {
    this.selectedSize = dress;
  }
  
  MarimeL(dress: any) {
    this.selectedSize = dress;
  }
  setSelectedSize(dress: any, size: string) {
    this.selectedSize = dress;
    this.marime = size;
  }
}
