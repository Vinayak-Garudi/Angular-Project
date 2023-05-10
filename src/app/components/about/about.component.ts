import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  // template:`<p>{{apiData}}</p>`,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnChanges {
  @Input() productTitle: any = '';
  @Output() value: any = new EventEmitter()
  constructor() {

  }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("aboutData", this.productTitle)
    this.value.emit("hello")
  }

}
