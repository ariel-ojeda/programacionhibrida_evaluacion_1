export class Circulo {
    radio: number;
  
    constructor(radio: number) {
      this.radio = radio;
    }
  
    calcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  }
  