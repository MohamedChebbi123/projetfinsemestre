import { Injectable } from '@angular/core';
import { produit } from '../../produit.model';
@Injectable({
  providedIn: 'root'
})
export class PannierService {
  public pnr:produit[]=[];
  ajouter_au_pannier(pr:produit){
    this.pnr.push(pr);
  }
  getpnr():produit[]{
    return this.pnr;
  }
}
