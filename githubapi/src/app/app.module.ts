import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubapipipePipe } from './githubapipipe.pipe';
import { FormsModule } from '@angular/forms';
import { GithubNavbarComponent } from './github-navbar/github-navbar.component';
import { GithubProfileCardComponent } from './github-profile-card/github-profile-card.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubRepositoryComponent } from './github-repository/github-repository.component';
import { GithubAppComponent } from './github-app/github-app.component'

@NgModule({
  declarations: [
    AppComponent,
    GithubapipipePipe,
    GithubNavbarComponent,
    GithubProfileCardComponent,
    GithubProfileComponent,
    GithubRepositoryComponent,
    GithubAppComponent
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
