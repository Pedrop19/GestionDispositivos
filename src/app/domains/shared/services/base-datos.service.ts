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

  //? Obtener datos de la tabla dispositivos
  getDispositivos(): Observable<[]> {
    return from(this.supabase
      .from('dispositivos')
      .select('*')
      .then(response => response.data as unknown as []));
  }

  eliminarDispositivo(id: number): Observable<[]> {
    return from(
      this.supabase
        .from('dispositivos')
        .delete()
        .eq('id', id)
        .then(response => response.data as unknown as [])
    );
  }

  //? Insertar un dispositivo
  insertarDispositivo(dispositivo: any): Observable<[]> {
    return from(this.supabase
      .from('dispositivos')
      .insert(dispositivo)
      .then(response => response.data as unknown as []));
  }

  //? Actualizar un dispositivo
  actualizarDispositivo(dispositivo: any): Observable<[]> {
    return from(this.supabase
      .from('dispositivos')
      .update(dispositivo)
      .eq('id', dispositivo.id)
      .then(response => response.data as unknown as []));
  }

}
