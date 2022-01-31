import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  constructor(private http:HttpService) { }
  data:any
  top:any
  error:boolean = false
  ngOnInit(): void {
    this.http.getNews().subscribe(res=>{
      this.data=res

        },err=>{
this.error=true
        })

        this.http.getTopNews().subscribe(res=>{
          this.top=res

            })
  }

}
