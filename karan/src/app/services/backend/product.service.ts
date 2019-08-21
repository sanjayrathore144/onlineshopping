import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import { HttpClient } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';  
// import 'rxjs/add/operator/map';  
// import 'rxjs/add/operator/do';  
@Injectable({ 
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  saveProduct(user){      
    return this.http.post('http://localhost:3000/api/saveProduct/', user);
  } 
   
  getProduct(){       
    return this.http.get('http://localhost:3000/api/getProduct/');      
  }  

  deleteProduct(id){   
    return this.http.post('http://localhost:8080/api/deleteProduct/',{'id': id});
  }  
}
 