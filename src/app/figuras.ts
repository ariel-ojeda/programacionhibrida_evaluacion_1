// Clase abstracta
export abstract class FiguraGeometrica {
    // Método abstracto que debe ser implementado por las clases derivadas
    abstract calcularPerimetro(): number;
}

// Clase concreta: Círculo
export class Circulo extends FiguraGeometrica {
    radio: number;

    constructor(radio: number) {
        super(); // Llama al constructor de la clase abstracta
        this.radio = radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio; // Fórmula para el perímetro del círculo
    }
}

// Clase concreta: Triángulo Escaleno
export class TrianguloEscaleno extends FiguraGeometrica {
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(lado1: number, lado2: number, lado3: number) {
        super();
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    calcularPerimetro(): number {
        return this.lado1 + this.lado2 + this.lado3; // Suma de los lados del triángulo
    }
}
