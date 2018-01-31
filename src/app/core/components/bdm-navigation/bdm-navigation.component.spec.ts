import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmNavigationComponent } from './bdm-navigation.component';

describe('BdmNavigationComponent', () => {
  let component: BdmNavigationComponent;
  let fixture: ComponentFixture<BdmNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdmNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdmNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
