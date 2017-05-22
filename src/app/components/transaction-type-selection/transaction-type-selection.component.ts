import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-type-selection',
  templateUrl: './transaction-type-selection.component.html'
})
export class TransactionTypeSelectionComponent implements OnInit {

  types = ['Composition Transaction', 'Start-Confirm-Execute', 'Criteria-List', 'Parameter Screen', 'Custom Screen 1'];
  selectedTxnType = null;

  constructor() { }

  ngOnInit() {
  }

}
