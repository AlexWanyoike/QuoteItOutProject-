import { QuoteformComponent } from './../quoteform/quoteform.component';
import { DatecalcPipe } from './../datecalc.pipe';

import { QuotedetailsComponent } from './../quotedetails/quotedetails.component';

import { Quoteclass } from './../quoteclass';
import { Component, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  

  myimage:string = 'assets/images/Cables New Used GoDaddy Store Image (1).png'
  myimage1:string = 'assets/images/Cables New Used GoDaddy Store Image.png'
  myimage2:string = 'assets/images/Grey Circles Gaming YouTube Channel Art (1).png'
  myimage3:string = 'assets/images/Grey Circles Gaming YouTube Channel Art.png'
  myimage4:string = 'assets/images/QUOTE IT.png'
  
  

  quotes: Quoteclass[] = [
    new Quoteclass('Henry', 'If Java had true garbage collection, most programs would delete themselves upon execution.', 'Robert Sewell',new Date(2020,3,14)),
    new Quoteclass('Arthur','The way to get started is to quit talking and begin doing.','Walt Disney',new Date(2020,3,14)),
    new Quoteclass('Jason','If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt',new Date(2020,3,14)),
    new Quoteclass('Ellen','Life is what happens when youre busy making other plans.','Eleanor Roosevelt',new Date(2020,3,14)),
    
  ];
  add: any;


  
  toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }  
///



  quoteDelete(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
 ///////
  
  inputquote(quote:Quoteclass){
   let quotelink= this.quotes.length;
    
    this.quotes.push(quote)
  }
   

  
  
  








  ngOnInit(): void {
  }

}
