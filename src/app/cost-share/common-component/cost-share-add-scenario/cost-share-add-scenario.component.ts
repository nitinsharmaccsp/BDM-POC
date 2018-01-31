import { CostShareService } from './../../cost-share.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cost-share-add-scenario',
  templateUrl: './cost-share-add-scenario.component.html',
  styleUrls: ['./cost-share-add-scenario.component.css']
})
export class CostShareAddScenarioComponent implements OnInit {
 @Input() occurencevalue ;

  constructor(private costshareservice: CostShareService) {
  }

  ngOnInit() {
  }

}
