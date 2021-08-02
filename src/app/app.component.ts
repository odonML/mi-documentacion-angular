import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  lista = ['hola', 'papu', 'de', 'papus'];

  texto="texto en minusculas";
  
  classComponent = 'card';

  title = 'mi-documentacion';
  link =
    'https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  name = '';
  addNumber() {
    console.log('numero agregado');
  }
}
