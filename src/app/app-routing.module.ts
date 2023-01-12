import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  {path:'/document', component:DocumentComponent},
  {path:'/campus', component: CampusComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
