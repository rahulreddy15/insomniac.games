import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-cards-component',
  templateUrl: './support-cards-component.component.html',
  styleUrls: ['./support-cards-component.component.css']
})
export class SupportCardsComponentComponent implements OnInit {

  @Input() link: string;
  @Input() img: string;

  constructor() { 
    this.link = "missing link";
    this.img = "";
  }

  ngOnInit(): void {
  }

}
