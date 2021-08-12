import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ===============================================================
  // DATA BINDING---------------------------------------------------
  // ===============================================================
  title = 'INTERPOLACION';
  link =
    'https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  event() {
    alert('EVENT BINDING');
  }
  name = 'TOW-WAY BINDING';
  // ===============================================================
  // PIPE-----------------------------------------------------------
  // ===============================================================
  texto = 'texto en mayusculas';
  // ===============================================================
  // DIRECTIVAS ATRIBUTOS-------------------------------------------
  // ===============================================================
  // NgClass--------------------------------------------------------
  estadoPositivo: boolean = true; //ESTA PROPIEDAD LA UTILIZAREMOS EN NgClass Y NgStyle.
  clases: Array<String> = ['colorBack', 'colorText'];
  changeClass() {
    this.estadoPositivo = !this.estadoPositivo;
  }
  // NgStyle--------------------------------------------------------
  cambiarStyle: boolean = true;
  styleForNgStyle = { 'background-color': 'purple', color: 'white' };
  changeStyle() {
    this.cambiarStyle = !this.cambiarStyle;
  }
  refreshStyle() {
    this.styleForNgStyle = {
      'background-color': this.cambiarStyle ? 'purple' : 'black',
      color: 'white',
    };
  }
  // ===============================================================
  // DIRECTIVAS ESTRUCTURARES --------------------------------------
  // ===============================================================
  // NgIf-----------------------------------------------------------
  active: boolean = true;
  inActive(){
    this.active = !this.active;
  }
  // NgFor----------------------------------------------------------
  nombres = ['Oscar', 'Miguel', 'Sergio', 'Alfonso'];



  
}
