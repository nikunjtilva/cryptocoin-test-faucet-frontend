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
    return this.httpService.get(`${environment.API_GATEWAY}${environment.WALLET_BALANCE_API}/${coinType}`)
  }
}
