import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { SupermercadoComponent } from './components/supermercado/supermercado.component';
import { HomeComponent } from './components/home/home.component';
import { FacturaComponent } from './components/factura/factura.component';
import { TipoComponent } from './components/tipo/tipo.component';

@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    HomeComponent,
    FacturaComponent,
    TipoComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
