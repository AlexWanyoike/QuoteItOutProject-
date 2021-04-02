import { Quoteclass } from './../quoteclass';
import { Quote } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {

  inputquote = new Quoteclass("","","",new Date());
  @Output() newQuoteclass = new EventEmitter<Quoteclass>();
  
  addQuoteclass(){
    this.newQuoteclass.emit(this.inputquote);
    this.inputquote = new Quoteclass("","","",new Date());
  }

  //
  
   

  constructor() { }

  ngOnInit(): void {
  }

}
