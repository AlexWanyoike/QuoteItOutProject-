

import { Component, OnInit } from '@angular/core';
import { Quotedata } from './../quotedata';
import { DetailsQuoteComponent } from './../details-quote/details-quote.component';


@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  quote:string[] | undefined

  quotes: Quotedata[] = [
    new Quotedata('a', 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Quotedata('b','Buy Cookies','I have to buy cookies for the parrot'),
    new Quotedata('cs','Get new Phone Case','Diana has her birthday coming up soon'),
    
  ];

  showDescription: boolean;
  constructor(public name: string,quotename: string,public quoteauthor: string){
    this.showDescription=false;
  }
  ngOnInit(): void {
  }

}
