import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngressoService {

  nome: string = '';
  sector: string = '';
  type: string = '';
  date: string = '';

  constructor() { }
}
