import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostShareShowOccurenceComponent } from './cost-share-show-occurence.component';

describe('CostShareShowOccurenceComponent', () => {
  let component: CostShareShowOccurenceComponent;
  let fixture: ComponentFixture<CostShareShowOccurenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostShareShowOccurenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostShareShowOccurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
