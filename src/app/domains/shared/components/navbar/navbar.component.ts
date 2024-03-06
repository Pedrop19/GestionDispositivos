import { Component, inject } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  commonService = inject(CommonService);

  verPaginaPrincipalClick() {
    
  }
}
