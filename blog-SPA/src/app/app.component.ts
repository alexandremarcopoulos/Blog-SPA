import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-SPA';
  carteira: string = "assets/img/Carteira.jpg"
  pulseira: string = "assets/img/Pulseira_Relogio.jpg"
  capaKindle: string = "assets/img/Capa_Kindle.jpg"
  chaveiro: string = "assets/img/Chaveiro.jpg "
}
