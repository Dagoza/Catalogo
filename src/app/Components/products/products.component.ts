import { Component, OnInit } from '@angular/core';
import { RequestApiService } from 'src/app/services/request-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productos: any;
  buscar: string;
  constructor(private service: RequestApiService) { }

  ngOnInit() {
    this.service.getProductos().subscribe(
      (response) => {
        console.log(response);
        this.productos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
