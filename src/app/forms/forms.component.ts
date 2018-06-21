import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  // @Input() name: string;
  @Input() label: string;
  // @Input() id: string;
  // @Input() data: string;
  // @Input() cssclass: string;
  // @Input() type: string;
  // @Input() placeholderinside: string;
  // @Input() controlname: string;
  // @Output() dataResponse = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
