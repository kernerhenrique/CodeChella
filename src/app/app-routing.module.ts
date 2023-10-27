import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/telas/home/home.component';
import { ExperienciaComponent } from './components/telas/experiencia/experiencia.component';
import { MapaDeSetoresComponent } from './components/telas/mapa-de-setores/mapa-de-setores.component';
import { InformacoesComponent } from './components/telas/informacoes/informacoes.component';
import { IngressosComponent } from './components/telas/ingressos/ingressos.component';
import { IngressoEmitidoComponent } from './components/telas/ingresso-emitido/ingresso-emitido.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { reuseComponent: true}
  },
  {
    path: 'experiencia',
    component: ExperienciaComponent
  },
  {
    path: 'mapa',
    component: MapaDeSetoresComponent
  },
  {
    path: 'informacoes',
    component: InformacoesComponent
  },
  {
    path: 'ingressos',
    component: IngressosComponent
  },
  {
    path: 'ingresso-emitido',
    component: IngressoEmitidoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
