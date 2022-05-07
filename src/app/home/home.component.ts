import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre!: string;
  papellido!: string;
  sapellido!: string;
  genero!: string;
  correo!: string;
  fechan!: string;
  usuarios: miembros[] = [];

  imagenUsuario:string = "assets/img/miembros.jpg";

  constructor() { }

  ngOnInit(): void {
    
  }

  registroUsuario() {
    this.usuarios=JSON.parse(localStorage.getItem('usuarioRegistrados') || "");
    let aux: miembros = {
      nombre: this.nombre,
      papellido: this.papellido,
      sapellido: this.sapellido,
      genero: this.genero,
      correo: this.correo,
      fechan: this.fechan
    }
    this.usuarios.push(aux);
    localStorage.setItem('usuarioRegistrados',JSON.stringify(this.usuarios))

    /*  console.log(informacion);
     localStorage.setItem('usuarioRegistrados',JSON.stringify(informacion));
     console.log(localStorage.getItem('usuarioRegistrados')); */
  }
}

interface miembros {
  nombre: string;
  papellido: string;
  sapellido: string;
  genero: string;
  correo: string;
  fechan: string;
}