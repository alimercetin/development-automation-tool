import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';

@Component({
  selector: 'app-composition-selection',
  templateUrl: './composition-selection.component.html'
})
export class CompositionSelectionComponent implements OnInit {
  @Output() compositionSelected = new EventEmitter();

  @Input() labelString: string[];
  @Input() compositionList: string[];

  selectedComposition = null;

  constructor() { }

  ngOnInit() {
  }

  onChange(module) {
    this.compositionSelected.emit(this.selectedComposition);
  }

}
