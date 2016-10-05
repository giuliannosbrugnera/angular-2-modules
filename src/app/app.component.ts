import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1 highlight>{{title}}</h1>'
})
export class AppComponent {
  title = 'Minimal NgModule';
}
