import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {
  ruta = 'https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos';
  constructor(private http: HttpClient) { }


  getProductos(): Observable<any> {
    return this.http.get(this.ruta);
  }
}
