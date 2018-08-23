import { TestBed, inject } from '@angular/core/testing';

import { WalletServiceService } from './wallet-service.service';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from './http.service';

class MockHttpService{
  get=()=>{
    return new Observable((observer)=>{
      observer.next(0);
      observer.complete();
    });
  }
  post=()=>{
    return new Observable((observer)=>{
      observer.next(0);
      observer.complete();
    })
  }
}
describe('WalletServiceService', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [
        {provide:HttpService,useClass:MockHttpService},
        WalletServiceService,
      ]
    });
  });

  it('should be created', inject([WalletServiceService], (service: WalletServiceService) => {
    expect(service).toBeTruthy();
  }));
});
