import { Component } from '@angular/core';
import { pantaloni } from '../Models/pantaloni';
import { ProductServiceService } from '../Services/product-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pantaloni',
  templateUrl: './pantaloni.component.html',
  styleUrls: ['./pantaloni.component.css']
})
export class PantaloniComponent {
  selectedSize: any;
  pantaloniFromDB: pantaloni[]=[];
  cartItems:pantaloni[]=[];
  marime:string='';
  constructor(private productService:ProductServiceService,private cartService:CartService){
    this.getPantaloni(); 
  }
  getPantaloni(){
    this.productService.getPantaloni().subscribe(result=>{this.pantaloniFromDB=result})
  }
  addToCart(pantaloni:pantaloni) {
    pantaloni.marime=this.marime;
    this.cartService.addToCartCuMarime(pantaloni.id, pantaloni.Nume,pantaloni.Imagine, pantaloni.Pret, pantaloni.marime);
    this.cartItems.push(pantaloni);
  }
  MarimeS(pantaloni: any) {
    this.selectedSize = pantaloni;
  }
  
  MarimeM(pantaloni: any) {
    this.selectedSize = pantaloni;
  }
  
  MarimeL(pantaloni: any) {
    this.selectedSize = pantaloni;
  }
  setSelectedSize(pantaloni: any, size: string) {
    this.selectedSize = pantaloni;
    this.marime = size;
  }
}
