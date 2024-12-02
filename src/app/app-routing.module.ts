import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { PannierComponent } from './pannier/pannier.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { CarteBanquaireComponent } from './carte-banquaire/carte-banquaire.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'produit', component: ProduitComponent, canActivate: [authGuard] },
  { path: 'pannier', component: PannierComponent, canActivate: [authGuard] },
  { path:"carte",component:CarteBanquaireComponent, canActivate: [authGuard] },
  {path:"aboutus",component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
