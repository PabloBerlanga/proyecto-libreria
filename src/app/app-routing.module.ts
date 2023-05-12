import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './tienda/header/header.component';
import { TiendaComponent } from './tienda/tienda.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'tienda', component: TiendaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'tienda/admin', redirectTo: 'admin', pathMatch: 'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)},
  { path: 'tienda', component: HeaderComponent}
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
