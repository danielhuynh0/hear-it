import { Component } from '@angular/core';
import { CreateUserService } from './create-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private createUserService: CreateUserService) {}

  title = 'hearit-frontend';

  user = {
    username: '',
    password: '',
  };

  confirmPassword = '';

  onSubmit() {
    console.log(this.user);

    if (this.user.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    } else {
      this.createUserService.createUser(this.user).subscribe(
        (data) => {
          console.log(data);
          alert('User created successfully');
        },
        (error) => console.log(error)
      );
    }
  }
}
