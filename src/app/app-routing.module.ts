import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { CompagineComponent } from './compagine/compagine.component';
import { BrokersComponent } from './brokers/brokers.component';
import { BrokersDetailComponent } from './brokers-detail/brokers-detail.component';

const routes: Routes = [
  {path:"",component:AdminComponent},
  {path:"details",component:AdminDetailsComponent},
  {path:"compagine",component:CompagineComponent},
  {path:"broker",component:BrokersComponent},
  {path:"broker-details",component:BrokersDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
