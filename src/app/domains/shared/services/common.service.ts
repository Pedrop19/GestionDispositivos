import { Injectable } from '@angular/core';
import { Dispositivo } from '../models/dispositivo.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  listaDispositivos = <any[]>([]);
  
  
}
