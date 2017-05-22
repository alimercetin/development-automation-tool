import { Component, OnInit, ViewChild } from '@angular/core';

import { ExecuteCompositionSelectionComponent } from '../execute-composition-selection/execute-composition-selection.component';
import { ConfirmCompositionSelectionComponent } from '../confirm-composition-selection/confirm-composition-selection.component';
import { TransactionTypeSelectionComponent } from '../transaction-type-selection/transaction-type-selection.component';
import { ModuleSelectionComponent } from '../module-selection/module-selection.component';
import { TransactionDefinition } from '../shared/transaction-definition.model';
import { DetailInfoComponent } from '../detail-info/detail-info.component';
import { ModulePathComponent } from '../module-path/module-path.component';


@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html'
})
export class CreateTransactionComponent implements OnInit {
  @ViewChild(DetailInfoComponent) detailInfo: DetailInfoComponent;
  @ViewChild(TransactionTypeSelectionComponent) transactionType: TransactionTypeSelectionComponent;
  @ViewChild(ModuleSelectionComponent) module: ModuleSelectionComponent;
  @ViewChild(ConfirmCompositionSelectionComponent) confirmComposition: ConfirmCompositionSelectionComponent;
  @ViewChild(ExecuteCompositionSelectionComponent) executeComposition: ExecuteCompositionSelectionComponent;
  @ViewChild(ModulePathComponent) modulePath: ModulePathComponent;

  transactionDefinition: TransactionDefinition = new TransactionDefinition();
  firstStepCompleted: boolean = false;
  secondStepCompleted: boolean = false;
  thirdStepCompleted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmitClicked() {
    if (this.firstStepCompleted === false) { 
      this.firstStepCompleted = true;
    } else if (this.secondStepCompleted === false) {
      this.secondStepCompleted = true;
    } else if (this.thirdStepCompleted === false) {
      this.thirdStepCompleted = true;
    } else {
      this.transactionDefinition.confirmCompositionName = this.confirmComposition.selectedConfirmComposition;
      this.transactionDefinition.executeCompositionName = this.executeComposition.selectedExecuteComposition;
      this.transactionDefinition.HasDocumentControl = this.detailInfo.hasDocumentControl;
      this.transactionDefinition.HasApproval = this.detailInfo.hasApproval;
      this.transactionDefinition.moduleName = this.module.selectedModule;
      this.transactionDefinition.path = this.modulePath.modulePath;
      this.transactionDefinition.transactionType = this.transactionType.selectedTxnType;
    }
  }

  onResetClicked() {
    this.firstStepCompleted = false;
    this.secondStepCompleted = false;
    this.thirdStepCompleted = false;
    this.confirmComposition.selectedConfirmComposition = '';
    this.executeComposition.selectedExecuteComposition = '';
    this.transactionType.selectedTxnType = '';
    this.module.selectedModule = '';
    this.modulePath.modulePath = '';
    this.detailInfo.hasApproval = false;
    this.detailInfo.hasDocumentControl = false;
  }

}
