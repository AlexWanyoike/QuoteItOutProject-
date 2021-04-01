
import { Quoteclass } from './../quoteclass';
import { Component, OnInit } from '@angular/core';
import { QuoteformComponent } from './../quoteform/quoteform.component';
import { QuotedetailsComponent } from './../quotedetails/quotedetails.component';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  
  quote: Quoteclass[] | undefined

  

  
  ngOnInit(): void {
  }

}
