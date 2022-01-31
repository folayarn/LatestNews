import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
data:any
error:boolean=false
  constructor(private http:HttpService, private route:ActivatedRoute) {


      this.category= route.snapshot.params['category'];

  }
category:any
  ngOnInit(): void {

    this.http.getNewsCategory(this.category).subscribe(data => {
      this.data=data.results;
    },err=>{
      this.error=true
    })
  }

}
