import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
@Component({
  imports:[CommonModule,FormsModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  selector: 'app-carte-banquaire',
  standalone: true,
  templateUrl: './carte-banquaire.component.html',
  styleUrls: ['./carte-banquaire.component.css']
  
})
export class CarteBanquaireComponent {
  
  fullName: string = '';
  location: string = '';
  amount: number | null = null;

  onSubmit() {
    if (this.fullName && this.location && this.amount !== null) {
      console.log('Form Submitted!', {
        fullName: this.fullName,
        location: this.location,
        amount: this.amount
      });
    } else {
      console.log('veuillez remplir les information');
    }
  }
}
