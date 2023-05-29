import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import{MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import { CosComponent } from './cos/cos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BluzeComponent } from './bluze/bluze.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PantaloniComponent } from './pantaloni/pantaloni.component';
import { BlugiComponent } from './blugi/blugi.component';
import { RochiiComponent } from './rochii/rochii.component';
import { GeciComponent } from './geci/geci.component';
import { PulovereComponent } from './pulovere/pulovere.component';
import { TricouriComponent } from './tricouri/tricouri.component';
import { CamasiComponent } from './camasi/camasi.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CosComponent,
    NavbarComponent,
    BluzeComponent,
    PantaloniComponent,
    BlugiComponent,
    RochiiComponent,
    GeciComponent,
    PulovereComponent,
    TricouriComponent,
    CamasiComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    CheckoutComponent,
    MatStepperModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
