import { Component, OnInit, Input } from '@angular/core';
import { Experience } from './experience';
import { ExperiencesService } from './experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  imageWidth: number = 200;
  title:string = "Experiences";
  
  @Input('langToDisplay') lang: string;



  experiences: Experience[];

  constructor(private service: ExperiencesService) { }

  ngOnInit() {
    
    if(this.lang === 'fr'){
      this.title = "Expériences";
    }else{
      this.title = "Experiences"
    }

    this.service.getExperiences(this.lang).subscribe(
      data => this.experiences = data
    )
  }

}
