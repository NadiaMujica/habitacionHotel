
import { Servicio } from "./Servicio";

let freeService = new Servicio("Internet", 0);
export abstract class Habitacion {
  protected servicios: Servicio[];
  protected numero: number;
  protected estado: boolean;
  protected precioBase: number;
  constructor(numero: number, estado: boolean, precioBase: number) {
    this.numero = numero;
    this.estado = estado;
    this.precioBase = precioBase;
    this.servicios = [freeService];
  }
  //getters----
  getNumero() {
    return this.numero;
  }
  getEstado() {
    return this.estado;
  }
  getPrecioBase() {
    return this.precioBase;
  }
  getServicios() {
    console.log(this.servicios);
  }
  //setters----
  setNumero(numero: number) {
    return (this.numero = numero);
  }
  setEstado(estado: boolean) {
    return (this.estado = estado);
  }
  setPrecioBase(precioBase: number) {
    return (this.precioBase = precioBase);
  }
  //methods----
  abstract calcularCosto(): void;
  abstract agregarServicios(servicio: Servicio): void;
  public reservar() {
    if (this.estado === true) {
      console.log("la habitacion " + this.getNumero() + " ya esta reservada");
      return;
    }
    this.setEstado(true);
    console.log("La habitacion " + this.getNumero() + " fue reservada");
  }
  public liberar() {
    this.setEstado(false);
    console.log("La habitacion " + this.getNumero() + " fue liberada");
  }
}