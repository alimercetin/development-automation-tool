import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-execute-composition-selection',
  templateUrl: './execute-composition-selection.component.html'
})
export class ExecuteCompositionSelectionComponent implements OnInit {

  executeCompositions = ['ACCTExecuteCreateComposition', 
                        'ACNTExecuteCreateComposition', 
                        'BPMXExecuteCreateComposition', 
                        'INFTExecuteCreateComposition', 
                        'ZZZZExecuteCreateComposition'];
  selectedExecuteComposition = null;

  constructor() { }

  ngOnInit() {
  }

}
