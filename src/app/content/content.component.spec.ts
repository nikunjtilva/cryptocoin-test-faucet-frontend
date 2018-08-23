import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { CoinSelectionComponent } from '../coin-selection/coin-selection.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentComponent,
      CoinSelectionComponent ],
      imports:[FormsModule,NgbModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
