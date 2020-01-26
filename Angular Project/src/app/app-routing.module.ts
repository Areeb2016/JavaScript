import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { DelComponent } from './del/del.component';
import { EditComponent } from './edit/edit.component';
import { ViewcsComponent } from './viewcs/viewcs.component';
import { AddcsComponent } from './addcs/addcs.component';
import { DelcsComponent } from './delcs/delcs.component';
import { EditcsComponent } from './editcs/editcs.component';
import { ViewembsComponent } from './viewembs/viewembs.component';
import { AddembsComponent } from './addembs/addembs.component';
import { DelembsComponent } from './delembs/delembs.component';
import { EditembsComponent } from './editembs/editembs.component';
import { ViewrasComponent } from './viewras/viewras.component';
import { AddrasComponent } from './addras/addras.component';
import { DelrasComponent } from './delras/delras.component';
import { EditrasComponent } from './editras/editras.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'viewevents',
    component:ViewComponent
  },
  {
    path:'addevent',
    component:AddComponent
  },
  {
    path:'delevent',
    component:DelComponent
  },
  {
    path:'editevent',
    component:EditComponent
  },
  {
    path:'viewieeecs',
    component:ViewcsComponent
  },
  {
    path:'addieeecs',
    component:AddcsComponent
  },
  {
    path:'delieeecs',
    component:DelcsComponent
  },
  {
    path:'editieeecs',
    component:EditcsComponent
  },
  {
    path:'viewieeeembs',
    component:ViewembsComponent
  },
  {
    path:'addieeeembs',
    component:AddembsComponent
  },
  {
    path:'delieeeembs',
    component:DelembsComponent
  },
  {
    path:'editieeeembs',
    component:EditembsComponent
  },
  {
    path:'viewieeeras',
    component:ViewrasComponent
  },
  {
    path:'addieeeras',
    component:AddrasComponent
  },
  {
    path:'delieeeras',
    component:DelrasComponent
  },
  {
    path:'editieeeras',
    component:EditrasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
