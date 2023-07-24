import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  username = new FormControl('daniel');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  postalCode = new FormControl('');
  city = new FormControl('');

  // user: User = new User('', '', '', '', '', '');
  constructor() {}

  onSubmit() {
    console.log(this.username.value);

  }
}
