import { Component, Input, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';

@Component({
  selector: 'app-annonce-detaillees',
  templateUrl: './annonce-detaillees.component.html',
  styleUrls: ['./annonce-detaillees.component.css']
})
export class AnnonceDetailleesComponent implements OnInit {
  @Input() voiture =  new Voiture("nenenen", "ejejejje", "Très belle Audi A3, peu rouler, confort cuir de vachette, couleur camel.Electrique /110 000km. Boite automatique pour confort de conduite optimisé. Palette au volant,tableau de bord intuitif. Bluetooth. Possibilité de discution de prix à l'essai.", "30 000", "2020", "120 000", "Audi", "A1", "Electrique","AudiA1");

  constructor() { }

  ngOnInit(): void {
  }
}
