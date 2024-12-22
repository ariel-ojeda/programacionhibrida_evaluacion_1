import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonCardHeader, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrianguloEscaleno } from '../modelo/trianguloEscaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, FormsModule, CommonModule]
})
export class TrianguloComponent implements OnInit {
  ladoA: string = "";
  ladoB: string = "";
  ladoC: string = "";
  perimetro: number | null = null;
  

  constructor() { }

  ngOnInit() { }

  calcular() {
    const ladoA = Number(this.ladoA);
    const ladoB = Number(this.ladoB);
    const ladoC = Number(this.ladoC);
    const tri = new TrianguloEscaleno(ladoA, ladoB, ladoC);
    this.perimetro = tri.calcularPerimetro();
  }
}
