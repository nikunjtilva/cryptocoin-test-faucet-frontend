import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WalletServiceService } from '../providers/wallet-service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit, OnChanges {
  @Input() coinType = 'tltc';
  walletAddress = '';
  amount = '';
  constructor(private walletService:WalletServiceService) { }

  ngOnInit() {
  }

  ngOnChanges(change:SimpleChanges){
    this.coinType = change.coinType.isFirstChange() ? change.coinType.currentValue:change.coinType.previousValue;
  }

  requestCoin(){
    console.log(this.walletAddress,this.amount);
  }

}
