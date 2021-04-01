
import { Component, OnInit, Input} from '@angular/core';
import { Quotedata } from './../quotedata';


@Component({
  selector: 'app-details-quote',
  templateUrl: './details-quote.component.html',
  styleUrls: ['./details-quote.component.css']
})
export class DetailsQuoteComponent implements OnInit {


  @Input() quote: Quotedata | undefined
  
  

 

  ngOnInit(): void {
  }

}
