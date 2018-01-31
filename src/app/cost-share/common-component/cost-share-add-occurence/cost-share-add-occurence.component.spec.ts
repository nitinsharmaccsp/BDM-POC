import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostShareAddOccurenceComponent } from './cost-share-add-occurence.component';

describe('CostShareAddOccurenceComponent', () => {
  let component: CostShareAddOccurenceComponent;
  let fixture: ComponentFixture<CostShareAddOccurenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostShareAddOccurenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostShareAddOccurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
