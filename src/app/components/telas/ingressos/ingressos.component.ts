import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { IngressoService } from '../../services/ingresso.service';


@Component({
  selector: 'app-ingressos',
  templateUrl: './ingressos.component.html',
  styleUrls: ['./ingressos.component.css']
})
export class IngressosComponent {

  nome: string = '';
  sector: string = '';
  type: string = '';
  date: string = '';

  formulario! : FormGroup;

  constructor(private formBuilder: FormBuilder, private ingressoService: IngressoService, private router: Router){
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required, Validators.minLength(5)]],
      birth: ['', [Validators.required, this.validarIdade(18)]],
      sector: ['', [Validators.required]],
      type: ['', [Validators.required]],
      date: ['', [Validators.required]],

    })
  }

  gerarIngresso(){
    if(this.formulario.valid){

    }
  }

  validarIdade(idadeMinima: number): ValidatorFn{
    return (control: AbstractControl): { [key: string]: any } | null => {
      const dataNascimento = new Date(control.value);

      if (isNaN(dataNascimento.getTime())) {
        return { dataInvalida: true };
      }

      const hoje = new Date();
      hoje.setFullYear(hoje.getFullYear() - idadeMinima);

      if (dataNascimento > hoje) {
        return { idadeMinima: true };
      }

      return null;
    };
  }

  validarFormulario(){
    if(this.formulario.valid){
      this.router.navigate(['../ingresso-emitido'])
    }else{
      this.formulario.markAllAsTouched();
    }
    this.ingressoService.nome = this.nome;
    this.ingressoService.type = this.type;
    this.ingressoService.sector = this.sector;
    this.ingressoService.date = this.date;
  }
}
