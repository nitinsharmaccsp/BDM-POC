import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bdm-modal',
  templateUrl: './bdm-modal.component.html',
  styleUrls: ['./bdm-modal.component.css']
})
export class BdmModalComponent implements OnInit {
  @Input() modalTitle:Array<any>;
  @Input() modalFooter:Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
