import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  listaDispositivos = <any[]>([]);
  dispositivoSeleccionado: any;
  editarDispositivo = signal(false);
  editarDispositivo$ = toObservable(this.editarDispositivo);

}
