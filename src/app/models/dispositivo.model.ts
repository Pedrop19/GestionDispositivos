import { Tipo } from "./tipo.model";

export interface Dispositivo {
    id: number;
    nombre: string;
    tipo: Tipo;
    numeroSerie: string;
    imagen: string;
    estado: string;
}