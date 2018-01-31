import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostShareAddScenarioComponent } from './cost-share-add-scenario.component';

describe('CostShareAddScenarioComponent', () => {
  let component: CostShareAddScenarioComponent;
  let fixture: ComponentFixture<CostShareAddScenarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostShareAddScenarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostShareAddScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
