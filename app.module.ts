import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {DataTableModule} from "angular-6-datatable";
import { HttpModule } from '@angular/http';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { AlertsModule } from 'angular-alert-module';
import { AgGridModule } from 'ag-grid-angular';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ViewbookingFormComponent } from './viewbooking-form/viewbooking-form.component';
import { CancelFormComponent } from './cancel-form/cancel-form.component';
import { SecondBatchComponent } from './second-batch/second-batch.component';
import { ViewSecondComponent } from './view-second/view-second.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    ViewbookingFormComponent,
    CancelFormComponent,
    SecondBatchComponent,
    ViewSecondComponent,
    

 ],

    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    DataTableModule,
    HttpModule,
    AgGridModule,
    AgGridModule.withComponents(null),
   AlertsModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
