import { Component, OnInit } from '@angular/core';
import { ListeAnnonceService } from '../liste-annonce.service';
import { Voiture } from '../model/voiture.model';


@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit {
  page = 1;

  voitures: Voiture[] = [];
  constructor(private serviceVoiture: ListeAnnonceService) { }





  ngOnInit(): void {
    this.voitures = this.serviceVoiture.lesVoitures;
  }

}
