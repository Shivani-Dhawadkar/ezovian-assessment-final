import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../const/model/interface';

@Injectable({
  providedIn: 'root'
})
export class TableArrayService {
  baseUrl : string = `${environment.baseUrl}/productDetails`
 
  constructor(private _http : HttpClient) { }
  getAllDetails():Observable<Product[]>{
    return this._http.get<any>(this.baseUrl)
  }

  postDetails(obj:any):Observable<Product[]>{
    return this._http.post<any>(this.baseUrl,obj)
  }

  deleteDetails(id:any){
    let url = `${this.baseUrl}/${id}`
    return this._http.delete<any>(url)
  }

  updateDetails(id:any, obj:Product){
    let url = `${this.baseUrl}/${id}` 
    return this._http.patch(url, obj)
  }
}
