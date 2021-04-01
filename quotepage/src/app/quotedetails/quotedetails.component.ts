import { Quoteclass } from './../quoteclass';
import { Component, OnInit , Input, Output , EventEmitter} from '@angular/core';



@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {


  @Input() quote: Quoteclass| undefined
  
  quotes: Quoteclass[] = [
    new Quoteclass('a', 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Quoteclass('b','Buy Cookies','I have to buy cookies for the parrot'),
    new Quoteclass('cs','Get new Phone Case','Diana has her birthday coming up soon'),
    
  ];
  
  

  showDescription: boolean;
  constructor(public name: string,quotename: string,public quoteauthor: string){
    this.showDescription=false;
  }
  ngOnInit(): void {
  }

}
