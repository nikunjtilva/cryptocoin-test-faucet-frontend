import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coin-selection',
  templateUrl: './coin-selection.component.html',
  styleUrls: ['./coin-selection.component.css']
})
export class CoinSelectionComponent implements OnInit {

  @Input() coin='tbtc';
  @Output() coinChange = new EventEmitter<string>();  
  constructor() { }

  ngOnInit() {
  }

  changeValue = (value) =>{
    this.coinChange.emit(this.coin);
  }

}
