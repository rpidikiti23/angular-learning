import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { EventListingComponent } from './event-listing/event-listing.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    DashboardComponent,
    EventListingComponent,
    UserEventsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    ButtonModule,
  ]
})
export class HomeModule { }
