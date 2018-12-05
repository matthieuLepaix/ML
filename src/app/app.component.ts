import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

export const slideInAnimation =
trigger('routeAnimations', [
  transition('AboutPage => ExperiencesPage', [
    query(':enter', [
      style({ opacity: '0'})
    ]),
    group([
      query(':enter', [
        animate('2000ms ease-in', style({ opacity: '100%'}))
      ])
    ])
  ]),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'Matthieu Lepaix';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
