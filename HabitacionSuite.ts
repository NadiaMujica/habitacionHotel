import { Habitacion } from "./Habitacion";
import { Servicio } from "./Servicio";

let suiteFreeService = new Servicio("Caja de seguridad", 0);
export class HabitacionSuite extends Habitacion {
  public constructor(numero: number, estado: boolean) {
    super(numero, estado, 5000);
    this.servicios.push(suiteFreeService);
  }
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