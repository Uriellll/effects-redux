import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  constructor(private service: UsuarioService) { }
  usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.service.getUsers().subscribe(res=>{
      this.usuarios = res;

    },error=>{
      console.log(error);
    })
  }

}
