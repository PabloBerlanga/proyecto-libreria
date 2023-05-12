import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { ListadoEditorialesComponent } from './listado-editoriales/listado-editoriales.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { ListadoComprasComponent } from './listado-compras/listado-compras.component';
import { AgregarEditorialComponent } from './agregar-editorial/agregar-editorial.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', component: DashboardComponent},
    { path: 'libros', component: ListadoLibrosComponent},
    { path: 'libros/nuevo-libro', component: AgregarLibroComponent},
    { path: 'editoriales', component: ListadoEditorialesComponent},
    { path: 'editoriales/nueva-editorial', component: AgregarEditorialComponent},
    { path: 'usuarios', component: ListadoUsuariosComponent},
    { path: 'usuarios/nuevo-usuario', component: AgregarUsuarioComponent},
    { path: 'compras', component: ListadoComprasComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
