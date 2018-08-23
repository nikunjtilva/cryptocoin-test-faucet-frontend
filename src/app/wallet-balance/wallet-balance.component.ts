import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.css']
})
export class WalletBalanceComponent implements OnInit,OnChanges {
  
  @Input() coinType;
  balance:string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change:SimpleChanges){
    console.log(change);
  }

}
