import { Dispositivo } from "./dispositivo.model";
import { Usuario } from "./usuario.model";

export interface Prestamo {
    id: number;
    dispositivo: Dispositivo;
    usuario: Usuario;
    fechaPrestamo: string;
    fechaDevolucion: string;
}