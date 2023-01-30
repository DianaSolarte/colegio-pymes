import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { CampusComponent } from './campus/campus.component';
import { QualityComponent } from './quality/quality.component';

const routes: Routes = [
  {path:'/document', component: DocumentComponent},
  {path:'/campus', component: CampusComponent },
  {path:'/quality', component: QualityComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
