import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.apiUrl;

  constructor(public httpClient : HttpClient) {
    
  }



  getAllCategories(){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/getAllCategories`, options)
      .toPromise();

  }

  

  getCategoryByUrl(catUrl){
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.baseUrl}/getCategoryByUrl`, catUrl  , options)
      .toPromise();
  }

  

}