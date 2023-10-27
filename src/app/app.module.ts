import { NgModule } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { HomeComponent } from './components/telas/home/home.component';
import { ExperienciaComponent } from './components/telas/experiencia/experiencia.component';
import { MapaDeSetoresComponent } from './components/telas/mapa-de-setores/mapa-de-setores.component';
import { InformacoesComponent } from './components/telas/informacoes/informacoes.component';
import { IngressosComponent } from './components/telas/ingressos/ingressos.component';
import { IngressoEmitidoComponent } from './components/telas/ingresso-emitido/ingresso-emitido.component';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    ExperienciaComponent,
    MapaDeSetoresComponent,
    InformacoesComponent,
    IngressosComponent,
    IngressoEmitidoComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
