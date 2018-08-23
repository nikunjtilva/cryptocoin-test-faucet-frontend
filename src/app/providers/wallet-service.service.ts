import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletServiceService {

  constructor(private httpService:HttpService) { }

  public getBalance(coinType):Observable<any>{
    return this.httpService.get(`${environment.API_GATEWAY}${environment.WALLET_BALANCE_API}${coinType}`)
  }

  public requestCoin(coinType,walletAddress,amount):Observable<any>{
    return this.httpService.post(`${environment.API_GATEWAY}${environment.SEND_COIN_API}${coinType}/${walletAddress}/${amount}`,null);
  }
}
