import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//MATERIAL
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { ListadoEditorialesComponent } from './listado-editoriales/listado-editoriales.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { ListadoComprasComponent } from './listado-compras/listado-compras.component';
import { AgregarEditorialComponent } from './agregar-editorial/agregar-editorial.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';



@NgModule({
  declarations: [
    AdminComponent,
    ListadoLibrosComponent,
    ListadoEditorialesComponent,
    ListadoUsuariosComponent,
    ListadoComprasComponent,
    AgregarEditorialComponent,
    AgregarUsuarioComponent,
    AgregarLibroComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firestore),
    AngularFirestoreModule
  ]
})
export class AdminModule { }
