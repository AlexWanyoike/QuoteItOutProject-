import { QuoteformComponent } from './../quoteform/quoteform.component';
import { DatecalcPipe } from './../datecalc.pipe';

import { QuotedetailsComponent } from './../quotedetails/quotedetails.component';

import { Quoteclass } from './../quoteclass';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  

  myimage:string = 'assets/images'


  
  

  quotes: Quoteclass[] = [
    new Quoteclass('a', 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Quoteclass('b','Buy Cookies','I have to buy cookies for the parrot',new Date(2020,3,14)),
    new Quoteclass('cs','Get new Phone Case','Diana has her birthday coming up soon',new Date(2020,3,14)),
    
  ];
  add: any;


  
  toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }  
  deletequote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
 ///////
  
  quote = new Quoteclass("","","",new Date());

  onCreate(quote:any){
    this.quotes.push(quote);
    
    this.quote = new Quoteclass("","","",new Date());
    this.add.emit(this.quote);
    
  }
  








  ngOnInit(): void {
  }

}
