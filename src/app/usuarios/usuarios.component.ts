import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: miembros[] = [];

  constructor() { }

  ngOnInit(): void {
    this.usuarios=JSON.parse(localStorage.getItem('usuarioRegistrados') || "");
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
