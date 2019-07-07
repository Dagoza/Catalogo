import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  solicitudes: any;
  buscar: string;
  constructor() { }

  ngOnInit() {
    this.solicitudes = JSON.parse(localStorage.getItem('solicitudes'));
  }

}
