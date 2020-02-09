import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'open-nearby-restaurants';

  restaurantListProviders: string[] = ['yelp', 'google-maps', 'trip-advisor'];
  withoutYelp: string[] = ['google-maps', 'trip-advisor'];
  filterOutYelp = false;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  toggleFilterOutYelp() {
    this.filterOutYelp = !this.filterOutYelp;
  }
}
