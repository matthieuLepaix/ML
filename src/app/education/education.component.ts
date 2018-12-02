import { Component, OnInit } from '@angular/core';

import { Education } from './education';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  imageWidth: number = 200;
  title:string = "Education";

  educations: Education[];

  constructor(private service: EducationService) { }

  ngOnInit() {
    this.service.getExperiences().subscribe(
      data => this.educations = data
    );
  }

}
