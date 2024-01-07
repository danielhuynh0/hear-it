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

  activeTab: string = 'register';

  registerUser = {
    username: '',
    password: '',
  };

  confirmPassword = '';

  onRegister() {
    console.log(this.registerUser);

    if (this.registerUser.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    } else {
      this.createUserService.createUser(this.registerUser).subscribe(
        (data) => {
          console.log(data);
          alert('User created successfully');
        },
        (error) => console.log(error)
      );
    }
  }

  loginUser = {
    username: '',
    password: '',
  };

  onLogin(e: any) {
    e.preventDefault();
    console.log(this.loginUser);
  }
}
