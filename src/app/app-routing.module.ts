import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';

import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { VideotecaComponent } from './videoteca/videoteca.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { JuegosComponent } from './juegos/juegos.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'heroes', component:HeroesComponent},
  {path: 'about', component:AboutComponent},
  {path: 'video', component:VideotecaComponent},
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'juegos', component:JuegosComponent},

  {path: 'heroe/:id', component:UnheroeComponent},
  {path: 'buscador/:nombreh', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
