import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CosComponent} from './cos/cos.component';
import { MainComponent } from './main/main.component';
import { BluzeComponent } from './bluze/bluze.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PantaloniComponent } from './pantaloni/pantaloni.component';
import { BlugiComponent } from './blugi/blugi.component';
import { RochiiComponent } from './rochii/rochii.component';
import { GeciComponent } from './geci/geci.component';
import { PulovereComponent } from './pulovere/pulovere.component';
import { TricouriComponent } from './tricouri/tricouri.component';
import { CamasiComponent } from './camasi/camasi.component';

const routes: Routes = [
  {path:'cos', component:CosComponent},
  {path:'',component:MainComponent},
  {path:'bluze',component:BluzeComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'pantaloni',component:PantaloniComponent},
  {path:'blugi',component:BlugiComponent},
  {path:'rochii',component:RochiiComponent},
  {path:'geci',component:GeciComponent},
  {path:'pulovere',component:PulovereComponent},
  {path:'tricouri',component:TricouriComponent},
  {path:'camasi',component:CamasiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
