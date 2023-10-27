import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent {
  constructor(private router: Router){

  }

  ngOnInit(){

  }

  irParaHome(){
    this.router.navigate(['../home'])
  }

}
