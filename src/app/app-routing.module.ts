import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ExperiencesComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'education', component: EducationComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
