import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-news-by-country',
  templateUrl: './news-by-country.component.html',
  styleUrls: ['./news-by-country.component.css']
})
export class NewsByCountryComponent implements OnInit {
country:any
data:any
error:any
  constructor(private http:HttpService, private route:ActivatedRoute) {
    this.country= route.snapshot.params['category'];
  }

  ngOnInit(): void {
    this.http.getNewsCategory(this.country).subscribe(data => {
      this.data=data.results;
    },err=>{
      this.error=true
    })
  }



}
