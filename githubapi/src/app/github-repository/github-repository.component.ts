import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repository',
  templateUrl: './github-repository.component.html',
  styleUrls: ['./github-repository.component.css']
})
export class GithubRepositoryComponent implements OnInit {

  @Input() githubRepos:any[] | undefined;
  
  ngOnInit(){
    
  }

}
