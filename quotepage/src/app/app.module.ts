import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuoteinfoComponent } from './quoteinfo/quoteinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteformComponent,
    QuotedetailsComponent,
    NavbarComponent,
    QuoteinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
