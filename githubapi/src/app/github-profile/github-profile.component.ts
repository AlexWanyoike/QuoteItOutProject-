import { GithubAppComponent } from './../github-app/github-app.component';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  @Input() githubProfile:any;

  constructor() { }

  ngOnInit(): void {
  }

}
