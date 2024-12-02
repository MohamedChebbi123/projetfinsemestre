import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:false
})
export class LoginComponent {
  email: string = '';
  mot_de_passe: string = '';
  email_signin: string = '';
  mot_de_passe_signin: string = '';
  message: string = '';

  constructor(private router: Router) {}

  login() {
    const mot_de_passe_utu = localStorage.getItem('mot_de_passe');
    const email_utu = localStorage.getItem('email');

    if (this.mot_de_passe === mot_de_passe_utu && this.email === email_utu) {
      this.message = 'Login réussi';
      this.router.navigate(['/produit']);
    } else {
      this.message = 'Veuillez vérifier votre mot de passe ou email';
    }
  }

  signin() {
    if (this.email_signin && this.mot_de_passe_signin) {
      localStorage.setItem('mot_de_passe', this.mot_de_passe_signin);
      localStorage.setItem('email', this.email_signin);
      this.message = 'Inscription réussie';
      this.router.navigate(['/produit']);
    } else {
      this.message = 'Veuillez entrer un email et un mot de passe valides';
    }
  }
}
