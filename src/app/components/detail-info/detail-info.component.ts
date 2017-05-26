import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html'
})
export class DetailInfoComponent implements OnInit {
  @Output() approvalStatusChanged = new EventEmitter();
  @Output() documentControlStatusChanged = new EventEmitter();

  hasApproval: boolean = false;
  hasDocumentControl: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onApprovalStatusChange(module) {
    this.approvalStatusChanged.emit(this.hasApproval);
  }

  onDocumentControlStatusChange(module) {
    this.documentControlStatusChanged.emit(this.hasDocumentControl);
  }

}
