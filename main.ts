import { HabitacionEstandar } from "./HabitacionEstandar";
import { HabitacionSuite } from "./HabitacionSuite";
import { Servicio } from "./Servicio";

//suite
let nuevaSuite = new HabitacionSuite(1, true);
nuevaSuite.reservar();
let nuevoService = new Servicio("MiniBar", 2000);
nuevaSuite.agregarServicios(nuevoService);
nuevaSuite.getServicios();
let otroService = new Servicio("Aire acondicionado", 5000);
nuevaSuite.agregarServicios(otroService);
nuevaSuite.getServicios();
console.log(`El costo total de la habitación es: ${nuevaSuite.calcularCosto()}`);
//estandar
let nuevaEstandar = new HabitacionEstandar (2, false);
nuevaEstandar.getServicios();
console.log(`El costo total de la habitación es: ${nuevaEstandar.calcularCosto()}`);
nuevaEstandar.liberar();