import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'app-contact-slide',
  templateUrl: './contact-slide.component.html',
  styleUrls: ['./contact-slide.component.css']
})
export class ContactSlideComponent implements OnInit {
  @Input('isShown111') isShown: boolean;
  @Output() sendRecord: EventEmitter<any> = new EventEmitter();
  public name: string;
  public surName: string;
  public desc: string;
  public onClosed() {
    this.isShown = false;
    this.sendRecord.emit(this.isShown);
  }
  public print() {
    console.log(this.name);
    console.log(this.surName);
    console.log(this.desc);
  }
  public submit() {
    this.print();
    this.onClosed();
  }
  constructor() { }

  ngOnInit() {
  }

}
