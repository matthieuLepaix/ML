import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title: string = "Contact";
  @Input('langToDisplay') lang: string;
  windowHeight: number;

  constructor() { }

  ngOnInit() {
    this.windowHeight = window.innerHeight;
  }

}
