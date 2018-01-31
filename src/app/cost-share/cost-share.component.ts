import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-share',
  templateUrl: './cost-share.component.html',
  styleUrls: ['./cost-share.component.css']
})
export class CostShareComponent implements OnInit {
  private costbreadcrumb = ['Coinsurance', 'Copay', 'OPX', 'Aggregate Max', 'Deductible', 'Processing Order',
  'Processing Exception', 'Feeding Options', 'Accums Sharing'];
  constructor() { }

  ngOnInit() {
  }

}
