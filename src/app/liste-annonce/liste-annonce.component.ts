import { Component, OnInit } from '@angular/core';
import { ListeAnnonceService } from '../liste-annonce.service';
import { Voiture } from '../model/voiture.model';
// import { Options, LabelType } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit {
  page = 1;

  voitures: Voiture[] = [];



  // minValue: number = 100;
  // maxValue: number = 400;
  // options: Options = {
  //   floor: 0,
  //   ceil: 500,
  //   translate: (value: number, label: LabelType): string => {
  //     switch (label) {
  //       case LabelType.Low:
  //         return "<b>Min price:</b> $" + value;
  //       case LabelType.High:
  //         return "<b>Max price:</b> $" + value;
  //       default:
  //         return "$" + value;
  //     }
  //   }
  // };
  constructor(private serviceVoiture: ListeAnnonceService) { }





  ngOnInit(): void {
    this.voitures = this.serviceVoiture.lesVoitures;
  }

}
