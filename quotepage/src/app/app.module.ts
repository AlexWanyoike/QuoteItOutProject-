import { DatecalcPipe } from './datecalc.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteformComponent,
    QuotedetailsComponent,
    NavbarComponent,
    StrikethroughDirective,
    DatecalcPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
