import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RequestApiService } from './services/request-api.service';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsComponent } from './Components/products/products.component';
import { RequestComponent } from './Components/request/request.component';
import { CardsComponent } from './Components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchIDPipe } from './pipes/search-id.pipe';
import { LightboxModule } from 'ngx-lightbox';

const ROUTES: Routes = [
  { path: 'productos', component: ProductsComponent },
  { path: 'solicitudes', component: RequestComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: '*', redirectTo: 'productos' }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    RequestComponent,
    CardsComponent,
    SearchPipe,
    SearchIDPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LightboxModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RequestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
