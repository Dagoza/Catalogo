import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() descripcion: string;
  @Input() categoria: string;
  @Input() miniatura: string;
  @Input() precio: number;
  @Input() cantidadDisponible: number;
  @Input() imagen: string;
  @Input() idProducto: number;
  form: FormGroup;
  id: number;
  ciudades = [
    'Abejorral',
    'Abriaqu\u00ed',
    'Alejandr\u00eda',
    'Amag\u00e1',
    'Amalfi',
    'Andes',
    'Angel\u00f3polis',
    'Angostura',
    'Anor\u00ed',
    'Anz\u00e1',
    'Apartad\u00f3',
    'Arboletes',
    'Argelia',
    'Armenia',
    'Barbosa',
    'Bello',
    'Belmira',
    'Betania',
    'Betulia',
    'Brice\u00f1o',
    'Buritic\u00e1',
    'C\u00e1ceres',
    'Caicedo',
    'Caldas',
    'Campamento',
    'Ca\u00f1asgordas',
    'Caracol\u00ed',
    'Caramanta',
    'Carepa',
    'Carolina del Pr\u00edncipe',
    'Caucasia',
    'Chigorod\u00f3',
    'Cisneros',
    'Ciudad Bol\u00edvar',
    'Cocorn\u00e1',
    'Concepci\u00f3n',
    'Concordia',
    'Copacabana',
    'Dabeiba',
    'Donmat\u00edas',
    'Eb\u00e9jico',
    'El Bagre',
    'El Carmen de Viboral',
    'El Pe\u00f1ol',
    'El Retiro',
    'El Santuario',
    'Entrerr\u00edos',
    'Envigado',
    'Fredonia',
    'Frontino',
    'Giraldo',
    'Girardota',
    'G\u00f3mez Plata',
    'Granada',
    'Guadalupe',
    'Guarne',
    'Guatap\u00e9',
    'Heliconia',
    'Hispania',
    'Itag\u00fc\u00ed',
    'Ituango',
    'Jard\u00edn',
    'Jeric\u00f3',
    'La Ceja',
    'La Estrella',
    'La Pintada',
    'La Uni\u00f3n',
    'Liborina',
    'Maceo',
    'Marinilla',
    'Medell\u00edn',
    'Montebello',
    'Murind\u00f3',
    'Mutat\u00e1',
    'Nari\u00f1o',
    'Nech\u00ed',
    'Necocl\u00ed',
    'Olaya',
    'Peque',
    'Pueblorrico',
    'Puerto Berr\u00edo',
    'Puerto Nare',
    'Puerto Triunfo',
    'Remedios',
    'Rionegro',
    'Sabanalarga',
    'Sabaneta',
    'Salgar',
    'San Andr\u00e9s de Cuerquia',
    'San Carlos',
    'San Francisco',
    'San Jer\u00f3nimo',
    'San Jos\u00e9 de la Monta\u00f1a',
    'San Juan de Urab\u00e1',
    'San Luis',
    'San Pedro de Urab\u00e1',
    'San Pedro de los Milagros',
    'San Rafael',
    'San Roque',
    'San Vicente',
    'Santa B\u00e1rbara',
    'Santa Fe de Antioquia',
    'Santa Rosa de Osos',
    'Santo Domingo',
    'Segovia',
    'Sons\u00f3n',
    'Sopetr\u00e1n',
    'T\u00e1mesis',
    'Taraz\u00e1',
    'Tarso',
    'Titirib\u00ed',
    'Toledo',
    'Turbo',
    'Uramita',
    'Urrao',
    'Valdivia',
    'Valpara\u00edso',
    'Vegach\u00ed',
    'Venecia',
    'Vig\u00eda del Fuerte',
    'Yal\u00ed',
    'Yarumal',
    'Yolomb\u00f3',
    'Yond\u00f3',
    'Zaragoza'
  ];
  files: File = null;
  album = [];
  validacion = 0;
  today = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getUTCDate();


  constructor(public _lightbox: Lightbox) {
    this.createForm();
  }

  ngOnInit() {
    this.album.push({
      src: this.imagen,
      caption: this.descripcion,
      thumb: this.miniatura
    });
  }


  createForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      direccion: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', Validators.required),
    });
  }


  onFileChanged(event: any) {
    this.files = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      if (this.files.size > 1000000) {
        alert('El archivo excede la capacidad máxima de 1MB.');
        this.files = null;
      }
    }
  }

  save() {
    if (this.files && this.form.valid) {
      const solicitudes = JSON.parse(localStorage.getItem('solicitudes'));
      const formulario = this.form.value;
      formulario.producto = this.descripcion;
      formulario.precio = this.precio;
      this.validacion = 1;
      if (solicitudes) {
        formulario.id = solicitudes.datos.length + 1;
        solicitudes.datos.push(formulario);
        localStorage.setItem('solicitudes', JSON.stringify(solicitudes));
      } else {
        formulario.id = 1;
        const enviar = { datos: [formulario] };
        localStorage.setItem('solicitudes', JSON.stringify(enviar));
      }
      this.id =  formulario.id;
      this.createForm();
    } else {
      alert('Datos incompletos.');
      this.validacion = 2;
    }
  }

  closeModal() {
    this.validacion = 0;
  }

  open(): void {
    this._lightbox.open(this.album, 0);
  }

  close(): void {
    this._lightbox.close();
  }

}
