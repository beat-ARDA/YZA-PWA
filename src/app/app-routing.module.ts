import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebeHomeComponent } from './components/bebe-home/bebe-home.component';
import { HomeComponent } from './components/home/home.component';
import { CuerpoBusquedaComponent } from './components/cuerpo-busqueda/cuerpo-busqueda.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  { path: '', redirectTo: 'home/Soi', pathMatch: 'full' },
  { path: 'home/Soi', component: HomeComponent, canActivate: [MsalGuard], pathMatch: 'full' },
  { path: 'home/:url/:name', component: BebeHomeComponent, canActivate: [MsalGuard] },
  { path: 'detalles/:name', component: CuerpoBusquedaComponent, canActivate: [MsalGuard] },
  { path: 'detalles/:name/:id', component: CuerpoBusquedaComponent, canActivate: [MsalGuard] }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    // Don't perform initial navigation in iframes
    initialNavigation: !isIframe ? 'enabled' : 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
