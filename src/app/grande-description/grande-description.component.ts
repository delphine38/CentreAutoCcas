import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';

@Component({
  selector: 'app-grande-description',
  templateUrl: './grande-description.component.html',
  styleUrls: ['./grande-description.component.css']
})
export class GrandeDescriptionComponent implements OnInit {

  voiture = new Voiture("nenenen","ejejejje","Très belle Audi A3, peu rouler, confort cuir de vachette, couleur camel","30 000", "2020", "120 000", "Audi", "A1", "Electrique","AudiA1");

// descriptionLongue: Voiture[]=[
//   {
//   img: "../../assets/image/audiA1.jpg",
//   titre: audiA1,
//   public descriptionLongue: string,
//   public prix: string,
//   public anneeMiseCiruclation: string,
//   public kilometrage: string,
//   public marque: string,
//   public modele: string,
//   public typeCarburant: string,
//   public reference: string){}
//   }
// ];

  constructor() { }


  //descriptionLongue() voiture = new Voiture ("nenenen", "ejejejje", "Très belle Audi A3, peu rouler, confort cuir de vachette, couleur camel.Electrique /110 000km. Boite automatique pour confort de conduite optimisé. Palette au volant,tableau de bord intuitif. Bluetooth. Possibilité de discution de prix à l'essai.", "30 000", "2020", "120 000", "Audi", "A1", "Electrique","AudiA1");
  ngOnInit(): void {
  }

}
