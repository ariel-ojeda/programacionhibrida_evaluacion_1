import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonSelectOption, IonSelect } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule, IonSelect, IonSelectOption, CirculoComponent, TrianguloComponent, IonSelectOption],
})
export class HomePage {

 
  figuraSeleccionada: string | null = null

  constructor() {}


}
