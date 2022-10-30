import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmSearchComponentComponent } from './pw-1/filmdetails/film-search-component/film-search-component.component';
import { NotFoundComponent } from './pw-1/filmdetails/not-found/not-found.component';
import { LoginFormComponent } from './pw-1/login-form/login-form.component';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'search', component: FilmSearchComponentComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
