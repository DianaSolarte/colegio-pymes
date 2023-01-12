import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { Slider1Component } from './slider1/slider1.component';
import { CartComponent } from './cart/cart.component';
import { DocumentComponent } from './document/document.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { MedalComponent } from './medal/medal.component';
import { ProgramsComponent } from './programs/programs.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CampusComponent } from './campus/campus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { QualityComponent } from './quality/quality.component';
import { UbicationComponent } from './ubication/ubication.component';
import { ProgramCardComponent } from './program-card/program-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    FooterComponent,
    Slider1Component,
    CartComponent,
    DocumentComponent,
    DocumentListComponent,
    MedalComponent,
    ProgramsComponent,
    ScheduleComponent,
    CampusComponent,
    ContactUsComponent,
    QualityComponent,
    UbicationComponent,
    ProgramCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
