import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PannierComponent } from './pannier/pannier.component';
import { ProduitComponent } from './produit/produit.component';
import { LoginComponent } from './login/login.component';
import { CarteBanquaireComponent } from './carte-banquaire/carte-banquaire.component';
import { AboutUsComponent } from './about-us/about-us.component';  // Import the component
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    PannierComponent,
    LoginComponent,
    AboutUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CarteBanquaireComponent,
    MatDividerModule  // Import the standalone component here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
