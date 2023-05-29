import { Component} from '@angular/core';
import { product } from '../Models/product';
import { ProductServiceService } from '../Services/product-service.service';



  @Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
productsFromDB: product[]=[];
constructor(private productService:ProductServiceService){
  this.getProduct(); 
}
getProduct(){
  this.productService.getProduct().subscribe(result=>{this.productsFromDB=result})
}
}



