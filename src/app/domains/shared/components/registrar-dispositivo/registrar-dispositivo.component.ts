import { Component, inject } from '@angular/core';
import { BaseDatosService } from '../../services/base-datos.service';

@Component({
  selector: 'app-registrar-dispositivo',
  standalone: true,
  imports: [],
  templateUrl: './registrar-dispositivo.component.html',
  styleUrl: './registrar-dispositivo.component.css'
})
export class RegistrarDispositivoComponent {
  baseDatosService = inject(BaseDatosService);
  registrado = false;


  registrarDispositivo(nombre: string, numeroSerie: string) {
    let dispositivo = {
      Nombre: nombre,
      NumeroSerie: numeroSerie
    }
    this.baseDatosService.insertarDispositivo(dispositivo).subscribe({
      next: (data) => {
        console.log(data);
        this.registrado = true;
      }
    });
  }
}
