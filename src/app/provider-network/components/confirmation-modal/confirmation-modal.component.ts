import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() modalTitle:Array<any>;
  @Input() modalFooter:Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
