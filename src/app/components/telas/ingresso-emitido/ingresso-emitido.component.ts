import { Component } from '@angular/core';
import { IngressoService } from '../../services/ingresso.service';

@Component({
  selector: 'app-ingresso-emitido',
  templateUrl: './ingresso-emitido.component.html',
  styleUrls: ['./ingresso-emitido.component.css']
})
export class IngressoEmitidoComponent {

  ingressoService:IngressoService ;

  constructor( ingressoService: IngressoService){
    this.ingressoService = ingressoService;
  }

}
