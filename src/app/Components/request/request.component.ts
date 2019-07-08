import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  solicitudes: any;
  existen = false;
  buscar: string;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('solicitudes')) {
      this.existen = true;
      this.solicitudes = JSON.parse(localStorage.getItem('solicitudes'));
    }
  }

}
