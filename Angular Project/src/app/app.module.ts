import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { DelComponent } from './del/del.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { AddcsComponent } from './addcs/addcs.component';
import { DelcsComponent } from './delcs/delcs.component';
import { EditcsComponent } from './editcs/editcs.component';
import { ViewcsComponent } from './viewcs/viewcs.component';
import { AddembsComponent } from './addembs/addembs.component';
import { EditembsComponent } from './editembs/editembs.component';
import { ViewembsComponent } from './viewembs/viewembs.component';
import { DelembsComponent } from './delembs/delembs.component';
import { AddrasComponent } from './addras/addras.component';
import { EditrasComponent } from './editras/editras.component';
import { ViewrasComponent } from './viewras/viewras.component';
import { DelrasComponent } from './delras/delras.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DelComponent,
    EditComponent,
    ViewComponent,
    AddcsComponent,
    DelcsComponent,
    EditcsComponent,
    ViewcsComponent,
    AddembsComponent,
    EditembsComponent,
    ViewembsComponent,
    DelembsComponent,
    AddrasComponent,
    EditrasComponent,
    ViewrasComponent,
    DelrasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
