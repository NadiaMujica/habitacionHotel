export class Servicio {
    protected nombre: string;
    protected coste: number;
    public constructor(nombre: string, coste: number) {
      this.nombre = nombre;
      this.coste = coste;
    }
    //getters----
    getNombre() {
      return this.nombre;
    }
    getCoste() {
      return this.coste;
    }
    //setters----
    setNombre(nombre: string) {
      return (this.nombre = nombre);
    }
    setCoste(coste: number) {
      return (this.coste = coste);
    }
  }