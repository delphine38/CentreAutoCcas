import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceDetailleesComponent } from './annonce-detaillees/annonce-detaillees.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilComponent } from './profil/profil.component';
import { GererMonCompteComponent } from './gerer-mon-compte/gerer-mon-compte.component';
import { GererMesGaragesComponent } from './gerer-mes-garages/gerer-mes-garages.component';
import { GrandeDescriptionComponent } from './grande-description/grande-description.component';
import { CGUComponent } from './cgu/cgu.component';
import { MentionLegaleComponent } from './mention-legale//mention-legale.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite/politique-de-confidentialite.component';
import {EnregistrementComponent} from './enregistrement/enregistrement.component';

const routes: Routes = [
  {path: 'liste-annonce', component: ListeAnnonceComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'annonce-detaillees', component: AnnonceDetailleesComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'home', component: ListeAnnonceComponent},
  {path: 'gerer-mes-garages', component: GererMesGaragesComponent},
  {path: 'gerer-mon-compte', component: GererMonCompteComponent},
  {path: 'grande-description', component: GrandeDescriptionComponent},
  {path: 'formulaire-contact', component: FormulaireContactComponent},
  {path: 'cgu', component: CGUComponent},
  {path: 'mention-legale', component: MentionLegaleComponent},
  {path: 'politique-de-confidentialite', component: PolitiqueDeConfidentialiteComponent},
  {path: 'enregistrement', component: EnregistrementComponent},
  { path: '', component: ListeAnnonceComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
