import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';
import { AnnonceDetailleesComponent } from './annonce-detaillees/annonce-detaillees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { GererMonCompteComponent } from './gerer-mon-compte/gerer-mon-compte.component';
import { GererMesGaragesComponent } from './gerer-mes-garages/gerer-mes-garages.component';
import { GrandeDescriptionComponent } from './grande-description/grande-description.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { CGUComponent } from './cgu/cgu.component';
import { MentionLegaleComponent } from './mention-legale/mention-legale.component';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite/politique-de-confidentialite.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListeAnnonceComponent,
    ConnexionComponent,
    ProfilComponent,
    AnnonceDetailleesComponent,
    PageNotFoundComponent,
    GererMonCompteComponent,
    GererMesGaragesComponent,
    GrandeDescriptionComponent,
    FormulaireContactComponent,
    CGUComponent,
    MentionLegaleComponent,
    PolitiqueDeConfidentialiteComponent,
    EnregistrementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
