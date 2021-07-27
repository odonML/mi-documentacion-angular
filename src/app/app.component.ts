import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi-documentacion';
  fecha: number = Date.now();
  card="card";
  lista = ["hola", "papu", "de", "papus"];
}
