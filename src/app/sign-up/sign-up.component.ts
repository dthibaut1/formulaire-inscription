import { Component } from '@angular/core';
import { User } from './sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user: User = new User('', '', '', '');

  constructor() {}

  onSubmit(): void {
    console.log(this.user);

  }

}
