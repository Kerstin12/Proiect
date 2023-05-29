import { Component } from '@angular/core';
import { camasi } from '../Models/camasi';
import { ProductServiceService } from '../Services/product-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-camasi',
  templateUrl: './camasi.component.html',
  styleUrls: ['./camasi.component.css']
})
export class CamasiComponent {
  selectedSize: any;
  camasiFromDB: camasi[]=[];
  cartItems:camasi[]=[];
  marime:string='';
  constructor(private productService:ProductServiceService,private cartService:CartService){
    this.getCamasi(); 
  }
  getCamasi(){
    this.productService.getCamasi().subscribe(result=>{this.camasiFromDB=result})
  }
  addToCart(camasi:camasi) {
    camasi.marime=this.marime;
    this.cartService.addToCartCuMarime(camasi.id, camasi.Nume,camasi.Imagine, camasi.Pret, camasi.marime);
    this.cartItems.push(camasi);
  }
  MarimeS(camasi: any) {
    this.selectedSize = camasi;
  }
  
  MarimeM(camasi: any) {
    this.selectedSize = camasi;
  }
  
  MarimeL(camasi: any) {
    this.selectedSize = camasi;
  }
  setSelectedSize(camasi: any, size: string) {
    this.selectedSize = camasi;
    this.marime = size;
  }
  
  
}

