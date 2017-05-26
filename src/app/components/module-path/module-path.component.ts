import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-module-path',
  templateUrl: './module-path.component.html'
})
export class ModulePathComponent implements OnInit {
   @Output() modulePathSelected = new EventEmitter();

  selectedModulePath = null;

  constructor() { }

  ngOnInit() {
  }

  onChange(module) {
    this.modulePathSelected.emit(this.selectedModulePath);
  }

}
