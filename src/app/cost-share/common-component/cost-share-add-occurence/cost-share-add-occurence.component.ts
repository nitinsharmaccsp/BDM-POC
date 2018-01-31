import { CostShareService } from './../../cost-share.service';
import { Coinsurancestruct } from './../../../common/model/cost-share.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-cost-share-add-occurence',
  templateUrl: './cost-share-add-occurence.component.html',
  styleUrls: ['./cost-share-add-occurence.component.css']
})
export class CostShareAddOccurenceComponent implements OnInit {
  public occurencecount ;
  private coinsNo = 1000;
  public coinsurance= [];
  private levels=  ['PTO', 'BCO',  'Out of Area',  'Other'];

  constructor(private route: ActivatedRoute , public router: Router , public costshareservice: CostShareService) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
          if (param['occurencecountdata']) {
            this.occurencecount = +param['occurencecountdata']; //Specially for converting the string occurencedatacount to number
            this.generateOccurences(this.occurencecount);
          }
           else {
             this.coinsurance = this.costshareservice.dataset.occurences ;
          }
    }

    );

  }
  public generateOccurences(data) {
    for (let i = 0; i < data; ++i) {
      const coinsID = 'COINS' + this.coinsNo.toString();
      const occurenceObj = new Coinsurancestruct(coinsID, '', Number(''));
      this.coinsurance.push(occurenceObj);
      ++this.coinsNo;
   }
  }
  SubmitCoinsurance() {
    this.costshareservice.dataset.occurences = this.coinsurance;
    console.log(this.costshareservice.dataset);
  }
}
