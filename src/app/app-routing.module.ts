import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceDetailleesComponent } from './annonce-detaillees/annonce-detaillees.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path: 'liste-annonce', component: ListeAnnonceComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'annonce-detaillees', component: AnnonceDetailleesComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'home', component: ListeAnnonceComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
