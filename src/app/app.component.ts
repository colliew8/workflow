import { Component, OnInit, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private elRef:ElementRef) {  }

  ngOnInit() {
  }

  convert() {
    let doc = new jsPDF({
        orientation: 'landscape'
      });

    let table = this.elRef.nativeElement.querySelector('md-card');

    doc.fromHTML(table, 10, 10,{
    		'width': 100
    	});

    let table2 = this.elRef.nativeElement.querySelector('md-card');
    doc.fromHTML(table2, 10, 10,{
  		'width': 100
  	});
    doc.save('sample-file.pdf');
    }
}


