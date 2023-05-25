import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { environment } from 'src/environments/environment';



import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './tienda/header/header.component';
import { ListaTiendaComponent } from './tienda/lista-tienda/lista-tienda.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { TiendaComponent } from './tienda/tienda.component';
import { MatCardModule } from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import { CarritoComponent } from './tienda/carrito/carrito.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { CompraComponent } from './tienda/compra/compra.component';
import { DeshibitarSiDirective } from './directives/deshibitar-si.directive';
import { FilterPipe } from './pipes/filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ListaTiendaComponent,
    DashboardComponent,
    TiendaComponent,
    CarritoComponent,
    CompraComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatBadgeModule,
    MatMenuModule,
    DeshibitarSiDirective,
    MatSelectModule,
    provideFirebaseApp(() => initializeApp(environment.firestore)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    MatStepperModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
