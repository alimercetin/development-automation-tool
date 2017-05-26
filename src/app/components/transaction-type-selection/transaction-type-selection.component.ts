import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transaction-type-selection',
  templateUrl: './transaction-type-selection.component.html'
})
export class TransactionTypeSelectionComponent implements OnInit {
  @Output() transactionTypeSelected = new EventEmitter();

  @Input() typeList: string[];
  selectedTxnType = null;

  constructor() { }

  ngOnInit() {
  }

  onChange(module) {
    this.transactionTypeSelected.emit(this.selectedTxnType);
  }

}
