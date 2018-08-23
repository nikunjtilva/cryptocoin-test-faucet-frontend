import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WalletServiceService } from '../providers/wallet-service.service';

@Component({
  selector: 'app-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.css']
})
export class WalletBalanceComponent implements OnInit,OnChanges {
  
  @Input() coinType;
  balance:string;

  constructor(private walletService:WalletServiceService) { }

  ngOnInit() {
  }

  ngOnChanges(change:SimpleChanges){
    console.log(change);
    this.loadWalletBalance();
  }

  loadWalletBalance(){
    debugger;
    this.walletService.getBalance(this.coinType).subscribe((result)=>{
      debugger;
      console.log(result);
    },(error)=>{
      debugger;
    })
  }

}
