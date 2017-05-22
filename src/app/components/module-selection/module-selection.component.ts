import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-selection',
  templateUrl: './module-selection.component.html'
})
export class ModuleSelectionComponent implements OnInit {

  modules = ['ACCT', 'ACNT', 'BPMX', 'INFT', 'ZZZZ'];
  selectedModule = null;

  constructor() { }

  ngOnInit() {
  }

  onChange(module) {
  }

}
