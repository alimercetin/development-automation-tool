import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html'
})
export class DetailInfoComponent implements OnInit {

  hasApproval : boolean = false;
  hasDocumentControl : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
