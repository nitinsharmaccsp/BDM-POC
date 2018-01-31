import { CostShareService } from './../../cost-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-share-show-occurence',
  templateUrl: './cost-share-show-occurence.component.html',
  styleUrls: ['./cost-share-show-occurence.component.css']
})
export class CostShareShowOccurenceComponent implements OnInit {
  public coinsurance= [];
  public occurencedata= {};
  constructor(private costshareservice: CostShareService) { }

  ngOnInit() {
    this.coinsurance = this.costshareservice.dataset.occurences;
  }
  scenarioData(data) {
    this.occurencedata = this.costshareservice.dummyscenario(data);
    console.log(this.occurencedata);
  }
}
