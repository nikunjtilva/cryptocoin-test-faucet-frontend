import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-selection',
  templateUrl: './coin-selection.component.html',
  styleUrls: ['./coin-selection.component.css']
})
export class CoinSelectionComponent implements OnInit {
  coin='bitcoin';
  constructor() { }

  ngOnInit() {
  }

}
