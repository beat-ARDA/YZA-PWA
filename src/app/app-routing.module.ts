import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebeHomeComponent } from './components/bebe-home/bebe-home.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CuerpoBusquedaComponent } from './components/cuerpo-busqueda/cuerpo-busqueda.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:name', component: BebeHomeComponent },
  { path: 'detalles', component: CuerpoBusquedaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
