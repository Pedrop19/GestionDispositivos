import { Component, inject } from '@angular/core';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { ListaDispositivosComponent } from '../lista-dispositivos/lista-dispositivos.component';
import { RouterLinkActive, RouterLinkWithHref, RouterModule } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { RegistrarDispositivoComponent } from '../registrar-dispositivo/registrar-dispositivo.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [WelcomePageComponent, RouterLinkActive, RouterLinkWithHref, RouterModule, ListaDispositivosComponent, RegistrarDispositivoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  commonService = inject(CommonService);
  verDispositivos: boolean = false;
  registrarDispositivo: boolean = false;
  editarDispositivo: boolean = false;
  agregarDispositivo: boolean = false;



  verDispositivosClick() {
    this.verDispositivos = true;
    this.registrarDispositivo = false;
  }

  registrarDispositivoClick() {
    this.verDispositivos = false;
    this.registrarDispositivo = true;
  }

}
