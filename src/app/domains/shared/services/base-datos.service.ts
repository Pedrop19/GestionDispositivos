import { Injectable } from '@angular/core';
import { environment } from '../../../../../enviroments';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {

  //? Creamos el cliente
  private supabase: SupabaseClient;

  //? Le asignamos los valores de nuestra BBDD
  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  //? Obtener datos de la tabla productos
  getDispositivos(): Observable<[]> {
    return from(this.supabase
      .from('dispositivos')
      .select('*')
      .then(response => response.data as []));
  }

}
