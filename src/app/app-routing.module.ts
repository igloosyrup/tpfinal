import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './application/contact/contact.component';
import { ReadMemberComponent } from './application/crud/read-member/read-member.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { ErreurComponent } from './application/erreur/erreur.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { FunComponent } from './application/fun/fun.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { YoutubeComponent } from './application/youtube/youtube/youtube.component';

const routes: Routes = [
  {
    path: 'tutoriel',
    children: [
      { path: ':id', component: TutorielsComponent },
    ]
  },
  {path: 'youtube', component: YoutubeComponent},
  { path: 'read/:id', component: ReadMemberComponent },
  { path: 'updateForm/:id', component: UpdateComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'crud', component: ReadComponent },
  { path: 'fun', component: FunComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'youtube', loadChildren: () => import('./application/youtube/youtube/youtube.module').then(m => m.YoutubeModule) },
  { path: '**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
