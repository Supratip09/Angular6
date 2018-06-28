import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ProductInfo } from '../interface/product-info';

@Injectable({
  providedIn: 'root'
})
export class RemoteServiceService {

  constructor(private httpClient : HttpClient) { }

  getProductData():Observable<ProductInfo>{
  return this.httpClient.get<ProductInfo>('http://localhost:5555/products'); 
  }
  getProductDataById(id):Observable<ProductInfo>{
    return this.httpClient.get<ProductInfo>('http://localhost:5555/products/'+id); 
    }
  postProductData(productObj){
    console.log("Adding Product"+productObj.name+productObj.color);
    return this.httpClient.post('http://localhost:5555/products/',productObj).subscribe(
      (res:Response) => {
          console.log(res);
        }
       ); 
    }
    putProductData(updateUrl,productObj){
      return this.httpClient.put(updateUrl,productObj); 
      }

    deleteProduct(deleteUrl){
      console.log("The Delete Url : "+deleteUrl);
      return this.httpClient.delete(deleteUrl);
    }
}
