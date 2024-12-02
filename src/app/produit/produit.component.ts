import { Component } from '@angular/core';
import { produit } from '../../produit.model';
import { PannierService } from '../services/pannier.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  imports: [MatCardModule,CommonModule],
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
  standalone: true,
})
export class ProduitComponent {
  produits: produit[] = [
    { nom: "air jordan 1", prix: 70, imageurl: "https://stickystore.tn/wp-content/uploads/2022/09/Produit-site-21.png" },
    { nom: "nissan gtr", prix: 500000, imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3JaqZbnMWZuUjBB55w668tXgmAj-qD81wA&s" },
    { nom: "vélo", prix: 200, imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTyH5uWY5QiB8Ehtr-nI3i52uaUmPIXdur3g&s" },
    { nom: "boeing 737 max", prix: 800000000, imageurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/WS_YYC_737_MAX_1.jpg/1200px-WS_YYC_737_MAX_1.jpg" },
    { nom: "fauteuille", prix: 30, imageurl: "https://www.galameubelen.be/27997/fauteuille-chaise-avec-accoudoirs-microfibre-gris-valenco.jpg" },
    { nom: "plat", prix: 5, imageurl: "https://img.leboncoin.fr/api/v1/lbcpb1/images/93/1b/3b/931b3bb98210d886ca64e866eef2a3bf9157663f.jpg?rule=ad-large" },
    { nom: "moto", prix: 250, imageurl: "https://smsport.ca/wp-content/uploads/2024/02/suzuki-gsx-8s-bleu-cosmique-nacre-qu1-2024.webp" },
    { nom: "iphone 14", prix: 500, imageurl: "https://jmb.com.tn/wp-content/uploads/2023/07/iphone-14-128go-minuit-3.jpg" },
    { nom: "ballon de foot", prix: 3, imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSJ-IbCSJAy9q-ZT3sd91dwVxtBZ7m9WAXw&s" },
    { nom: "pc gaming", prix: 600, imageurl: "https://m.media-amazon.com/images/I/815P1vN3HpL.jpg" },
    { nom: "play station 5", prix: 65, imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU12vqdhRAV-_8-rrvfJMfSo7zG1-lhCRYgA&s" },
    { nom: "aventador svj", prix: 9000000, imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ulmnQM5V7Xb9bJBwviWZ315h8QMl_oLz4A&s" },
    { nom: "rolls royce phantom", prix: 89000000, imageurl: "https://i.gaw.to/vehicles/photos/40/27/402768-2022-rolls-royce-phantom.jpg?640x400" },
    { nom: "yeezy", prix: 960, imageurl: "https://m.media-amazon.com/images/I/61PwQF4LoOL._AC_SL1200_.jpg" },
    { nom: "scooter", prix: 380, imageurl: "https://www.sencor.com/getmedia/b4e3f84f-50bd-4917-900a-c0a7cbb6917a/57001081.jpg.aspx?width=2100&height=2100&ext=.jpg" },
    { nom: "patinette", prix: 27, imageurl: "https://www.abracadabraonline.store/images/thumbs/0026415_roller_415.jpeg" },
    { nom: "chaise gaming", prix: 120, imageurl: "https://tdiscount.tn/55466-large_default/chaise-gaming-rgb-gris.webp" },
    { nom: "haltere", prix: 40, imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzS01YyTjbgnTK1d0CCEVQS3CLpCBmDTGuA&s" },
  ];
  constructor(private pannierService: PannierService) {}
  ajouter_au_pannier(produit: produit): void {
    this.pannierService.ajouter_au_pannier(produit);
    alert(`${produit.nom} ajouté au panier!`);
  }
}
