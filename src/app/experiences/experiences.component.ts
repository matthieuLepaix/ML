import { Component, OnInit } from '@angular/core';
import { Experience } from './experience';
import { ExperiencesService } from './experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  imageWidth: number = 200;

  experiences: Experience[];

  constructor(private service: ExperiencesService) { }

  ngOnInit() {
    this.service.getExperiences().subscribe(
      data => this.experiences = data
    );
  }

}
