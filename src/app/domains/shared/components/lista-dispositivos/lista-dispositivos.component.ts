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


  ngOnInit() {
    this.supabaseService.getDispositivos().subscribe({
      next: (data) => {
        console.log(data);
        this.listaDispositivos = data;
      }
    });
  }
}
