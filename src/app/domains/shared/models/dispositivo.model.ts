import { Tipo } from "./tipo.model";

export interface Dispositivo {
    IdDispositivo: number;
    Nombre: string;
    Tipo: Tipo;
    NumeroSerie: string;
    Imagen: string;
    Estado: string;
}