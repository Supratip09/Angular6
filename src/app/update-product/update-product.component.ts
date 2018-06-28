import { Component, OnInit } from '@angular/core';
import { RemoteServiceService } from '../services/remote-service.service';
import { Router, ActivatedRoute} from '@angular/router';
import { ProductInfo } from '../interface/product-info';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  id:number;
  data:Object = {};
  status=false;
  productObj:Object = {};
  constructor(private router:Router,private route:ActivatedRoute  ,private _remoteServiceService:RemoteServiceService) { }

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
        }
       );;
  }
  ngOnInit() {
    this.route.params.subscribe(param => this.id =+param['id']);
    this._remoteServiceService.getProductDataById(this.id).subscribe(
      prodInfo =>{
        this.data = {
          "name" : prodInfo.name,
          "color" : prodInfo.color
        };
      }
    );
  }

}
