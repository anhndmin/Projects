import { Component } from '@angular/core';

@Component({
  selector: 'spotify-app',
  template: `
    <nav-bar></nav-bar> 
    <router-outlet></router-outlet>
    `
})
export class SpotifyAppComponent {
  title = 'Spotify Coding Challenge';
}
