import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ListSendersComponent } from './components/list-senders/list-senders.component';
import { DeleteSenderComponent } from './components/delete-sender/delete-sender.component';
import { AddParcelComponent } from './components/add-parcel/add-parcel.component';
import { ListParcelsComponent } from './components/list-parcels/list-parcels.component';
import { Routes, RouterModule } from "@angular/router";
import { AddSenderComponent } from './components/add-sender/add-sender.component';
import { HomeComponent } from './components/home/home.component';
import { InvalidComponent } from './components/invalid/invalid.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes:Routes = [
  {path:'addparcel', component: AddParcelComponent},
  {path: 'listparcels', component: ListParcelsComponent},
  {path:'addsender', component: AddSenderComponent},
  {path: 'listsenders', component: ListSendersComponent},
  {path: 'deletesender', component:DeleteSenderComponent},
  {path:'home', component:HomeComponent},
  {path:'invalid', component:InvalidComponent},
  {path:'**', redirectTo: "/invalid"},
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [AppComponent, ListSendersComponent, DeleteSenderComponent, AddParcelComponent, ListParcelsComponent, AddSenderComponent, HomeComponent, InvalidComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes, {useHash: true}), HttpClientModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}