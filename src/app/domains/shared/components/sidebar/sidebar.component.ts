import { Component } from '@angular/core';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { ListaDispositivosComponent } from '../lista-dispositivos/lista-dispositivos.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ListaDispositivosComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
