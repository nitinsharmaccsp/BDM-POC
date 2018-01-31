import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bdm-button',
  templateUrl: './bdm-button.component.html',
  styleUrls: ['./bdm-button.component.css']
})
export class BdmButtonComponent implements OnInit {
@Input() buttonProperties: Object;

  constructor() { }

  ngOnInit() {
  }

}
