import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wf-header',
  templateUrl: './wf-header.component.html',
  styleUrls: ['./wf-header.component.css']
})
export class WfHeaderComponent implements OnInit {

  wire = 'wireframe';

  header = {
    structure: '',
    wfRule: '',
    date: ''
  };

  constructor() { }

  ngOnInit() {
    this.header.structure = '<<Structure>>';
    this.header.wfRule = '<<Workflow Rule>>';
    this.header.date = '<<Date>>';
  }

}
