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
  message = ''
  constructor(private walletService:WalletServiceService) { }

  ngOnInit() {
  }

  ngOnChanges(change:SimpleChanges){
    this.coinType = change.coinType.isFirstChange() ? change.coinType.currentValue:change.coinType.previousValue;
    this.message = ''
  }

  requestCoin(){
    this.walletService.requestCoin(this.coinType,this.walletAddress,this.amount).subscribe((success)=>{
      this.message= 'Transaction Successful';
    },(error)=>{
      this.message =error.error.name;// JSON.stringify(error.error);
    });
  }

}
