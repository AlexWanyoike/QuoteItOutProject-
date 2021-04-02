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

  //[(ngModel)]="inputquote.name"
  //[(ngModel)]="inputquote.quoteit"
  //[(ngMOdel)]='inputquote.quoteauthor'
  //#quote='ngModel'
  //#name ='ngModel'
  //#name="quoteauthor"
  //(click)='toggleDetails(i)
  //(click)= 'quoteDelete(true)'(isComplete) = 'deleteQuoteclass($event,i)
  //(isComplete) = 'deletequote($event,i)
   

  constructor() { }

  ngOnInit(): void {
  }

}
