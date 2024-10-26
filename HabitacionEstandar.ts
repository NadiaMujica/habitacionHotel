import { Habitacion } from "./Habitacion";
import { Servicio } from "./Servicio";

export class HabitacionEstandar extends Habitacion {
    constructor(numero: number, estado: boolean) {
        super(numero, estado, 2000);
    }
    //methods----
    public agregarServicios(servicio: Servicio) {
        const indice = this.servicios.includes(servicio);
        if (indice) {
            console.log("El servicio ya esta agregado");
            return;
        }
        this.servicios.push(servicio);
    }
    public calcularCosto() {
        let costoHabitacion = this.getPrecioBase();
        for (let i = 0; i < this.servicios.length; i++) {
            costoHabitacion += this.servicios[i].getCoste();
        }
        return costoHabitacion
    }
}