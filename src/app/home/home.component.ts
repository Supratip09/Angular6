import { Component, OnInit } from '@angular/core';
import { RemoteServiceService } from '../services/remote-service.service';
import { ProductInfo } from '../interface/product-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id:number;
  data:Object = {};
  status=false;
  productObj:Object = {};
  isUpdate = false;

  products:ProductInfo;
  constructor(private _remoteServiceService:RemoteServiceService) { 
    console.log("Initializing Component");
    this.fetchData();
  }

  fetchData= function(){
    this._remoteServiceService.getProductData().subscribe(
      prodInfo =>{
        this.products = prodInfo
      }
    )
  }

  deleteProduct = function(id){
    if(confirm("Are you sure?")){
      const deleteUrl = "http://localhost:5555/products/"+`${id}`;
      this._remoteServiceService.deleteProduct(deleteUrl).subscribe(
        (res:Response) => {
            console.log(res);
            this.fetchData();
          }
         );
    }
  }

  updateProductInfo = function(id){
    this.isUpdate=true;
    this.id=id
    this._remoteServiceService.getProductDataById(this.id).subscribe(
      prodInfo =>{
        this.data = {
          "name" : prodInfo.name,
          "color" : prodInfo.color
        };
      }
    );
  }
  updateProduct = function(productData){
    this.status = false;
    this.updateUrl="http://localhost:5555/products/"+`${this.id}`;
    this.productObj={
      "name" : productData.name,
      "color" : productData.color
    }
    this._remoteServiceService.putProductData(this.updateUrl,this.productObj).subscribe(
      (res:Response) => {
          this.status = true;
          console.log(res);
          this.fetchData();
        }
       );;
  }
  ngOnInit() {
  }

}
