import { DataService } from '../dataservice.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from './../../environments/environment';


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit , OnDestroy{

  gifs:any[] = [];
  subcription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.subcription  = this.dataService.getGifs()
    .subscribe((response:any)=>{
      this.gifs =response;
    });
  }

 

  ngOnDestroy(){
    this.subcription.unsubscribe();
  }


}
