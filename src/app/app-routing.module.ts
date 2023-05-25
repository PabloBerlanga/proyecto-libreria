import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './tienda/header/header.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CompraComponent } from './tienda/compra/compra.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'tienda', component: TiendaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'login', component: LoginComponent},
  { path: 'tienda/admin', redirectTo: 'admin', pathMatch: 'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule), ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'tienda', component: HeaderComponent},
  { path: 'tienda/compra', component: CompraComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
]



@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
