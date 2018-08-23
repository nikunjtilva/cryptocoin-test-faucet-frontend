import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WalletServiceService } from '../providers/wallet-service.service';

@Component({
  selector: 'app-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.css']
})
export class WalletBalanceComponent implements OnInit,OnChanges {
  
  @Input() coinType;
  wallet:any = {
    balance:0,
    unitName:''
  };

  constructor(private walletService:WalletServiceService) { }

  ngOnInit() {
    this.loadWalletBalance();
  }

  ngOnChanges(change:SimpleChanges){
    console.log(change);
    debugger;
    this.coinType = change.coinType.isFirstChange() ? change.coinType.currentValue:change.coinType.previousValue;
    this.loadWalletBalance();
  }

  loadWalletBalance(){
    debugger;
    this.walletService.getBalance(this.coinType).subscribe((result)=>{
      this.wallet = result;
    },(error)=>{
    })
  }

}
