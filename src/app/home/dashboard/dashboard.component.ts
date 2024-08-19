import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  selectedTab = 'event-listing';
  selectedEventId: number | null = null;

  onEvent1Click(){
    this.selectedEventId = 1
    console.log("TEST Event 1 Clicked");
  }

  onEvent2Click(){
    console.log("TEST Event 2 Clicked");
  }
}
