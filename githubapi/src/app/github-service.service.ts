import { CLIENT_ID, CLIENT_SECRET } from './github-credentials';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private httpClient: HttpClient) { }



  //For GitHub Profile
  public getProfile(seachQuery:any): Observable<any>{
    let dataURL = `https://api.github.com/users/${seachQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<any>(dataURL).pipe(
///
 
    );

  }


  //For Github Repos

  public getRepos(seachQuery:any): Observable<any[]>{
    let dataURL = `https://api.github.com/users/${seachQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<any[]>(dataURL).pipe(
  
  
  );
  }
///
  public handleErrors(error: HttpErrorResponse){
    let errorMessage: string;
    if (error.error instanceof ErrorEvent){
      errorMessage =` Message: ${error.error.message}`;
    }
    else {
      errorMessage = `STATUS = ${error.status} MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage);



    
  };
  


}
