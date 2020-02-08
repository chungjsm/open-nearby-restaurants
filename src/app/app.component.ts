import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'open-nearby-restaurants';

  restaurantListProviders: string[] = ['yelp', 'google-maps', 'trip-advisor'];
  withoutYelp: string[] = ['google-maps', 'trip-advisor'];
  filterOutYelp = false;

}
