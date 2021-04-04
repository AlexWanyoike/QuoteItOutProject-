import { GithubServiceService } from './../github-service.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery:any;
  public githubProfile: any;
  public githubRepos: any[] | undefined;
  public errorMessage: any;

 

  constructor(private githubService: GithubServiceService) {}

  public searchUser(){
    this.githubService.getProfile(this.githubUserQuery).subscribe((data)=>{
      this.githubProfile = data;
     }, (error) => {
       this.errorMessage= error;
     });

     this.githubService.getRepos(this.githubUserQuery).subscribe((data)=>{
       this.githubRepos = data;
     }, (error)=>{
       this.errorMessage = error;
       
     }); 
  }
    
     
  


  

  ngOnInit(): void {
  }

}
