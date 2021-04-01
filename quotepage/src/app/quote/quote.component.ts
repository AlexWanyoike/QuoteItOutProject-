import { QuotedetailsComponent } from './../quotedetails/quotedetails.component';


import { Quoteclass } from './../quoteclass';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  
  quote: Quoteclass| undefined;
  

  quotes: Quoteclass[] = [
    new Quoteclass('a', 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Quoteclass('b','Buy Cookies','I have to buy cookies for the parrot'),
    new Quoteclass('cs','Get new Phone Case','Diana has her birthday coming up soon'),
    
  ];
  
  toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }  
  
  ngOnInit(): void {
  }

}
