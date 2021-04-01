

import { Component, OnInit } from '@angular/core';
import { DataService } from 'data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
  }

  search(searchTerm: string){
    if(searchTerm!==''){
      this.DataService.searchGifs(searchTerm);
    }

  }
}
