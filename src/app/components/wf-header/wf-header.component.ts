import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wf-header',
  templateUrl: './wf-header.component.html',
  styleUrls: ['./wf-header.component.css']
})
export class WfHeaderComponent implements OnInit {

  @Input() wfInstance: any;

  constructor() { }

  ngOnInit() {
  }

}
