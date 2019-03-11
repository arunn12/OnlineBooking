import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BookingFormComponent } from './booking-form/booking-form.component';
import {CancelFormComponent} from'./cancel-form/cancel-form.component';
import {ViewbookingFormComponent } from './viewbooking-form/viewbooking-form.component';
import { SecondBatchComponent } from './second-batch/second-batch.component';
import {ViewSecondComponent} from'./view-second/view-second.component';

const routes: Routes = [
  { path: 'viewbooking-form',component:ViewbookingFormComponent },
  {path:'booking-form',component:BookingFormComponent},
  {path:'cancel-form',component:CancelFormComponent},
  {path:'second-batch',component:SecondBatchComponent},
  {path:'view-second',component:ViewSecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }
