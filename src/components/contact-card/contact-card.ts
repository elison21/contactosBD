import { Component } from '@angular/core';

/**
 * Generated class for the ContactCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contact-card',
  templateUrl: 'contact-card.html'
})
export class ContactCardComponent {
  
  text: string;

  constructor() {
    console.log('Hello ContactCardComponent Component');
    this.text = 'Hello World';
  }

}
