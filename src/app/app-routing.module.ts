import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddMuseumComponent } from './add-museum/add-museum.component';
import { IndexComponent } from './index/index.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  // Les routes se déclarent dans un ordre précis
  { path: '', redirectTo: 'museums', pathMatch: 'full' },
  { path: 'add', component: AddMuseumComponent },
  { path: 'museum/:museumId', component: MuseumDetailComponent },
  { path: 'museums', component: IndexComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
