import { Component, OnInit, ViewChild } from '@angular/core';

import { CompositionSelectionComponent } from '../composition-selection/composition-selection.component';
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
  @ViewChild(CompositionSelectionComponent) confirmComposition: CompositionSelectionComponent;
  @ViewChild(ModulePathComponent) modulePath: ModulePathComponent;

  transactionDefinition: TransactionDefinition = new TransactionDefinition();
  firstPartCompleted: boolean = false;
  secondPartCompleted: boolean = false;
  thirdPartCompleted: boolean = false;

  modules: string[] = ['ACCT', 'ACNT', 'BPMX', 'INFT', 'ZZZZ'];
  types: string[] = ['Composition Transaction', 'Start-Confirm-Execute', 'Criteria-List', 'Parameter Screen', 'Custom Screen 1'];
  confirmCompositions: string[] = ['ACCTConfirmCreateComposition', 
                        'ACNTConfirmCreateComposition', 
                        'BPMXConfirmCreateComposition', 
                        'INFTConfirmCreateComposition', 
                        'ZZZZConfirmCreateComposition'];
  executeCompositions: string[] = ['ACCTExecuteCreateComposition', 
                        'ACNTExecuteCreateComposition', 
                        'BPMXExecuteCreateComposition', 
                        'INFTExecuteCreateComposition', 
                        'ZZZZExecuteCreateComposition'];
  confirmCompositionLabel = 'Confirm Composition';
  executeCompositionLabel = 'Execute Composition';

  constructor() { }

  ngOnInit() {
  }

  onSubmitClicked() {

  }

  onResetClicked() {
    this.firstPartCompleted = false;
    this.secondPartCompleted = false;
    this.thirdPartCompleted = false;
  }

  onModuleSelected(moduleData: string) {
    this.transactionDefinition.setModuleName(moduleData);

    if (this.transactionDefinition.getTransactionType()) {
      this.firstPartCompleted = true;
    }
  }

  onTransactionTypeSelected(transactionTypeData: string) {
    this.transactionDefinition.setTransactionType(transactionTypeData);

    if (this.transactionDefinition.getModuleName()) {
      this.firstPartCompleted = true;
    }
  }

  onConfirmCompositionSelected(confirmCompositionData: string) {
    this.transactionDefinition.setConfirmCompositionName(confirmCompositionData);

    if (this.transactionDefinition.getExecuteCompositionName()) {
      this.secondPartCompleted = true;
    }
  }

  onExecuteCompositionSelected(executeCompositionData: string) {
    this.transactionDefinition.setExecuteCompositionName(executeCompositionData);

    if (this.transactionDefinition.getConfirmCompositionName()) {
      this.secondPartCompleted = true;
    }
  }

  onModulePathSelected(modulePathData: string) {
    this.transactionDefinition.setPath(modulePathData);
    this.thirdPartCompleted = true;
  }

  onApprovalStatusChanged(approvalStatusData: boolean) {
    this.transactionDefinition.setHasApproval(approvalStatusData);
  }

  onDocumentControlStatusChanged(documentControlStatusData: boolean) {
    this.transactionDefinition.setHasDocumentControl(documentControlStatusData);
  }

}
