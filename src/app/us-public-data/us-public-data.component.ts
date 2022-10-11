import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-us-public-data',
  templateUrl: './us-public-data.component.html',
  styleUrls: ['./us-public-data.component.css']
})
export class UsPublicDataComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewPublicData().subscribe((data)=>{
      this.usPublicData=data
    })
  }
  usPublicData:any={}
  ngOnInit(): void {
  }

}
