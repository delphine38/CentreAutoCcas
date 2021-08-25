import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voiture } from './model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class ListeAnnonceService  implements OnInit {
  mesVoitures: any


  constructor(private serviceVoiture: ListeAnnonceService, private http: HttpClient) { }

  getAnnonceDelphine(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>("https://powerful-badlands-63524.herokuapp.com/api/annonce");
  }



  ngOnInit(): void {
    this.serviceVoiture.getAnnonceDelphine().subscribe((data:any)=>
      consol.log(data);
    this.mesVoitures = data.annonce

  )
  }

}
