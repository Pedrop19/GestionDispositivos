import { Dispositivo } from "./dispositivo.model";
import { Usuario } from "./usuario.model";

export interface Devolucion {
    id: number;
    dispositivo: Dispositivo;
    usuario: Usuario;
    fechaDevolucion: string;
}
