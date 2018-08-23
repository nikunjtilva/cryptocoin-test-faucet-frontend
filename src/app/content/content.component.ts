import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  coinType = 'tltc';
  constructor() { }

  ngOnInit() {
  }

  coinChanged = (value) => {
    console.log("coinchanged",value);
    this.coinType = value;
  }
}
