import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinSelectionComponent } from './coin-selection.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('CoinSelectionComponent', () => {
  let component: CoinSelectionComponent;
  let fixture: ComponentFixture<CoinSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinSelectionComponent ],
      imports:[ FormsModule,NgbModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
