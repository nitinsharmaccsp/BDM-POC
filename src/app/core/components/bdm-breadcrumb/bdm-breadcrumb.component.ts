import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bdm-breadcrumb',
  templateUrl: './bdm-breadcrumb.component.html',
  styleUrls: ['./bdm-breadcrumb.component.css']
})
export class BdmBreadcrumbComponent implements OnInit {
  @Input() breadcrumbdata ;

  constructor() { }

  ngOnInit() {
  }

}
