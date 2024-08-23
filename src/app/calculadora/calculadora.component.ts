import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: any = 0;

  sumar() {
    this.resultado = this.numero1 + this.numero2;
  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    if (this.numero2 !== 0) {
      this.resultado = this.numero1 / this.numero2;
    } else {
      this.resultado = 'Error: División por cero';
    }
  }

  reiniciar() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }
}
