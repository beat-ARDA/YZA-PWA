import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebeHomeComponent } from './components/bebe-home/bebe-home.component';
import { AuthGuardGuard } from './components/guards/auth-guard.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CuerpoBusquedaComponent } from './components/cuerpo-busqueda/cuerpo-busqueda.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardGuard] },
  { path: 'bebe-home', component: BebeHomeComponent, canActivate: [AuthGuardGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
