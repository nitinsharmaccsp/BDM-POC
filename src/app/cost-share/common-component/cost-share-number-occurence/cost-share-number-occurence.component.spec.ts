import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostShareNumberOccurenceComponent } from './cost-share-number-occurence.component';

describe('CostShareNumberOccurenceComponent', () => {
  let component: CostShareNumberOccurenceComponent;
  let fixture: ComponentFixture<CostShareNumberOccurenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostShareNumberOccurenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostShareNumberOccurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
