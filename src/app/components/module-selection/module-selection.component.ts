import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-module-selection',
  templateUrl: './module-selection.component.html'
})
export class ModuleSelectionComponent implements OnInit {
  @Output() moduleSelected = new EventEmitter();

  @Input() moduleList: string[];
  selectedModule = null;

  constructor() { }

  ngOnInit() {
  }

  onChange(module) {
    this.moduleSelected.emit(this.selectedModule);
  }

}
