import { Component } from '@angular/core';
import { blugi } from '../Models/blugi';
import { ProductServiceService } from '../Services/product-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-blugi',
  templateUrl: './blugi.component.html',
  styleUrls: ['./blugi.component.css']
})
export class BlugiComponent {
  selectedSize: any;
  blugiFromDB: blugi[]=[];
  cartItems:blugi[]=[];
  marime:string='';
  constructor(private productService:ProductServiceService,private cartService:CartService){
    this.getBlugi(); 
  }
  getBlugi(){
    this.productService.getBlugi().subscribe(result=>{this.blugiFromDB=result})
  }
  addToCart(blugi:blugi) {
    blugi.marime=this.marime;
    this.cartService.addToCartCuMarime(blugi.id, blugi.Nume,blugi.Imagine, blugi.Pret, blugi.marime);
    this.cartItems.push(blugi);
  }
  MarimeS(blugi: any) {
    this.selectedSize = blugi;
  }
  
  MarimeM(blugi: any) {
    this.selectedSize = blugi;
  }
  
  MarimeL(blugi: any) {
    this.selectedSize = blugi;
  }
  setSelectedSize(blugi: any, size: string) {
    this.selectedSize = blugi;
    this.marime = size;
  }
}
