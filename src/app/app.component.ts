import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CalculadoraComponent]  
})
export class AppComponent {
  title = 'calculadora';
}
