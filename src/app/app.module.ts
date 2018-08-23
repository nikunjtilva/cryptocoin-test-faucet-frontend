import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { CoinSelectionComponent } from './coin-selection/coin-selection.component';
import { WalletBalanceComponent } from './wallet-balance/wallet-balance.component';
import { HttpService } from './providers/http.service';
import { WalletServiceService } from './providers/wallet-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    CoinSelectionComponent,
    WalletBalanceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService,HttpClient,WalletServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
