import { Component, OnInit } from '@angular/core';
import { RemoteServiceService } from '../services/remote-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productObj:Object = {};
  constructor(private _remoteServiceService:RemoteServiceService) { 
  }

  addNewProduct = function(productData){
    this.productObj={
      "name" : productData.name,
      "color" : productData.color
    }
    this._remoteServiceService.postProductData(this.productObj);
  }
  ngOnInit() {
  }

}
