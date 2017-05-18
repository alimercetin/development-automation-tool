import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-composition-selection',
  templateUrl: './confirm-composition-selection.component.html'
})
export class ConfirmCompositionSelectionComponent implements OnInit {

  confirmCompositions = ['ACCTConfirmCreateComposition', 
                        'ACNTConfirmCreateComposition', 
                        'BPMXConfirmCreateComposition', 
                        'INFTConfirmCreateComposition', 
                        'ZZZZConfirmCreateComposition'];
  selectedConfirmComposition = null;

  constructor() { }

  ngOnInit() {
  }

}
