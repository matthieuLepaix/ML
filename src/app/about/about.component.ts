import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title:string = "About me";
  @Input('langToDisplay') lang: string;

  constructor() { }

  ngOnInit() {
    if(this.lang === 'fr'){
      this.title = "A Propos";
    }else{
      this.title = "About me"
    }
  }

}
