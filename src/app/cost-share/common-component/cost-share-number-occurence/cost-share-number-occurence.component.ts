import { CostShareService } from './../../cost-share.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-share-number-occurence',
  templateUrl: './cost-share-number-occurence.component.html',
  styleUrls: ['./cost-share-number-occurence.component.css']
})
export class CostShareNumberOccurenceComponent implements OnInit {

  private cost_share_type;
  public occurencecount ;

  constructor(private route: ActivatedRoute , public costshareservice: CostShareService) {
  }

  ngOnInit() {
  }

}
