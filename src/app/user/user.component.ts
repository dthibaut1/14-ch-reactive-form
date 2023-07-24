import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user: User = new User('', '', '', '', '', '');

  username = new FormControl('daniel');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  postalCode = new FormControl('');
  city = new FormControl('');

  inscription() {
    const usernameValue = this.username.value;
    const passwordValue = this.password.value;
    const emailValue = this.email.value;
    const streetValue = this.street.value;
    const postalCodeValue = this.postalCode.value;
    const cityValue = this.city.value;

    this.user.username = usernameValue || '';
    this.user.password = passwordValue || '';
    this.user.email = emailValue || '';
    this.user.street = streetValue || '';
    this.user.postalCode = postalCodeValue || '';
    this.user.city = cityValue || '';
  }
}
