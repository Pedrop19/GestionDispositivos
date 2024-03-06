import { Component, inject } from '@angular/core';
import { BaseDatosService } from '../../services/base-datos.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-lista-dispositivos',
  standalone: true,
  imports: [],
  templateUrl: './lista-dispositivos.component.html',
  styleUrl: './lista-dispositivos.component.css'
})
export class ListaDispositivosComponent {

  private supabaseService = inject(BaseDatosService);
  private commonService = inject(CommonService);
  listaDispositivos = this.commonService.listaDispositivos;
  dispositivoSeleccionado? = this.commonService.dispositivoSeleccionado;
  click = false;
  editado = false;
  eliminado = false;
  

  ngOnInit() {
    this.mostrarDispositivos();
  }

  mostrarDispositivos() {
    this.supabaseService.getDispositivos().subscribe({
      next: (data) => {
        console.log(data);
        this.listaDispositivos = data;
      }
    });
  }

  eliminarDispositivo(id: number) {
    this.supabaseService.eliminarDispositivo(id).subscribe({
      next: (data) => {
        this.eliminado = true;
        console.log(data);
        this.mostrarDispositivos();
      }
    });
  }

  enviarDispositivo(dispositivo: any) {
    this.click = true;
    this.dispositivoSeleccionado = dispositivo;
    console.log(this.dispositivoSeleccionado);
  }

  editarDispositivo(nombre: string, numeroSerie: string) {
    let dispositivo = {
      id: this.dispositivoSeleccionado.id,
      Nombre: nombre,
      NumeroSerie: numeroSerie
    }
    console.log(dispositivo);
    this.supabaseService.actualizarDispositivo(dispositivo).subscribe({
      next: (data) => {
        console.log(data);
        this.editado = true;
        this.mostrarDispositivos();
      }
    });
  }

}
