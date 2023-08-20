import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  constructor(private store:Store<AppState>) { }
  usuarios: Usuario[] = [];
  loading:boolean = false;
  error:any;

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({users,loading,error})=>{
      this.usuarios = users;
      this.loading =  loading;
      this.error = error;
      console.log(this.error);
    })
    this.store.dispatch(cargarUsuarios())
  }

}
