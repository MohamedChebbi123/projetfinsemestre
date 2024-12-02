import { Component, OnInit } from '@angular/core';
import { PannierService } from '../services/pannier.service';
import { produit } from '../../produit.model';

@Component({
  selector: 'app-pannier',
  standalone: false,
  templateUrl: './pannier.component.html',
  styleUrls: ['./pannier.component.css']
})
export class PannierComponent implements OnInit {
  pannier_elements: produit[] = [];

  constructor(private pannierService: PannierService) {}

  ngOnInit(): void {
    
    this.pannier_elements = this.pannierService.getpnr();
  }
}
