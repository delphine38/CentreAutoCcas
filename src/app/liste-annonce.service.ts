import { Injectable } from '@angular/core';
import { Voiture } from './model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class ListeAnnonceService {

  lesVoitures: Voiture[]=[
    new Voiture("../../assets/image/audiA1.jpg", "Audi A1", "Très belle Audi A3, peu rouler, confort cuir de vachette, couleur camel.Electrique /110 000km. Boite automatique pour confort de conduite optimisé. Palette au volant,tableau de bord intuitif. Bluetooth. Possibilité de discution de prix à l'essai.", "30 000", "2020", "120 000", "Audi", "A1", "Electrique","AudiA1"),
   new Voiture("../assets/image/bmwSerie1.jp","Bmw Série 1", "La BMW Série 1 n'a rien à envier à ses grandes sœurs. Avec un style combinant harmonieusement sportivité et luxe, elle affiche un look très audacieux. Comme cela a été fait pour le reste de la gamme, la Série 1  adopte une calandre", "20 000","2020","120 000","BMw","Série 1", "Diesel","BmwSérie1"),
     new Voiture("../assets/image/bmwSerie1.jp","Bmw Série 1", "La BMW Série 1 n'a rien à envier à ses grandes sœurs. Avec un style combinant harmonieusement sportivité et luxe, elle affiche un look très audacieux. Comme cela a été fait pour le reste de la gamme, la Série 1  adopte une calandre", "20 000","2020","120 000","BMw","Série 1", "Diesel","BmwSérie1"),
     new Voiture("../assets/image/bmwSerie1.jp","Bmw Série 1", "La BMW Série 1 n'a rien à envier à ses grandes sœurs. Avec un style combinant harmonieusement sportivité et luxe, elle affiche un look très audacieux. Comme cela a été fait pour le reste de la gamme, la Série 1  adopte une calandre", "20 000","2020","120 000","BMw","Série 1", "Diesel","BmwSérie1"),
     new Voiture("../assets/image/bmwSerie1.jp","Bmw Série 1", "La BMW Série 1 n'a rien à envier à ses grandes sœurs. Avec un style combinant harmonieusement sportivité et luxe, elle affiche un look très audacieux. Comme cela a été fait pour le reste de la gamme, la Série 1  adopte une calandre", "20 000","2020","120 000","BMw","Série 1", "Diesel","BmwSérie1")
  ];
  // voitures: Voiture[] = [

  // ];

  constructor() { }

}
