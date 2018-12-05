import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ExperiencesComponent } from './experiences/experiences.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about',      component: AboutComponent, data : {animation: 'AboutPage'}},
  { path: 'experiences', component: ExperiencesComponent, data : {animation: 'ExperiencesPage'}},
  { path: 'education', component: EducationComponent, data : {animation: 'EducationPage'}},
  { path: 'contact', component: ContactComponent, data : {animation: 'ContactPage'} },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
