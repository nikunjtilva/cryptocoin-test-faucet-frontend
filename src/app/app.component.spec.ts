import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { CoinSelectionComponent } from './coin-selection/coin-selection.component';
import { FormsModule } from '@angular/forms';
import { WalletBalanceComponent } from './wallet-balance/wallet-balance.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        ContentComponent,
        CoinSelectionComponent,
        WalletBalanceComponent
      ],
      imports:[
        FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
