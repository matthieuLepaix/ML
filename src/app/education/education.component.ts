import { Component, OnInit, Input } from '@angular/core';

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
  @Input('langToDisplay') lang: string;

  educations: Education[];

  constructor(private service: EducationService) { }

  ngOnInit() {
    this.service.getExperiences(this.lang).subscribe(
      data => this.educations = data
    );
  }

}
