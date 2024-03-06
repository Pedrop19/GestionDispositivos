import { Routes } from '@angular/router';
import { WelcomePageComponent } from './domains/shared/components/welcome-page/welcome-page.component';
import { ListaDispositivosComponent } from './domains/shared/components/lista-dispositivos/lista-dispositivos.component';

export const routes: Routes = [
    { path: 'dispositivos', component: ListaDispositivosComponent }
];
