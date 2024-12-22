import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardTitle, IonCardContent, IonImg, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonLabel, IonItem, IonImg, IonCardContent, IonCardTitle, IonCard, CommonModule, FormsModule],
})
export class CirculoComponent implements OnInit {
  resultado: string = "";

  perimetro: boolean = false;

  radio: string = "";

  mostrarResultado: boolean = false;



  constructor() { }

  ngOnInit() { }
  
  calcularPerimetro() {
    const radioNumerico = Number(this.radio); //
    if (radioNumerico > 0) {
       this.resultado = (2 * Math.PI * radioNumerico).toFixed(2); // Calculamos el perímetro y lo fijamos a dos decimales this.perimetro = true; } else { this.perimetro = false;

    }
    this.perimetro = true;
}
}
