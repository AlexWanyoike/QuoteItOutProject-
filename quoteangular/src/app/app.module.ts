import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormquoteComponent } from './formquote/formquote.component';
import { DisplayQuoteComponent } from './display-quote/display-quote.component';
import { DetailsQuoteComponent } from './details-quote/details-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    FormquoteComponent,
    DisplayQuoteComponent,
    DetailsQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
