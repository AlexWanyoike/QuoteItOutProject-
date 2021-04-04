import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repository',
  templateUrl: './github-repository.component.html',
  styleUrls: ['./github-repository.component.css']
})
export class GithubRepositoryComponent implements OnInit {

  @Input() githubRepos:any[] | undefined;
  repos: Repos[] =[];
  reponame: any | undefined;

  constructor(public rs: RestService) { }

  ngOnInit(): void {
    this.rs.getRepos().subscribe(((reponse: any[])=>{
      this.repos =reponse;
    }))
  }

  Search(){
    if(this.reponame ==""){
      this.ngOnInit()
    }else{
      this.repos = this.repos.filter(res =>{
        return res.reponame.toLocaleLowerCase().match(this.reponame.toLocaleLowerCase());
      })
    }
  }

  

}
