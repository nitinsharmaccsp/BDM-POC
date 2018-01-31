import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bdm-select',
  templateUrl: './bdm-select.component.html',
  styleUrls: ['./bdm-select.component.css']
})
export class BdmSelectComponent implements OnInit {
  @Input() pnsvalue:Array<any>;
  public pnsvalselected:String;

  constructor() { }

  ngOnInit() {
  }

}
