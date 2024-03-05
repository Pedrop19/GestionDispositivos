import { Component } from '@angular/core';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [WelcomePageComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
