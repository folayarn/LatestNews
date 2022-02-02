import { Component, OnInit } from '@angular/core'
import { HttpService } from 'src/app/services/http.service'

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  constructor(private http:HttpService) { }
data:any
error=false
show=false
  ngOnInit(): void {
  }

  search=""

  onChange(event:any){
this.http.searchDb(event).subscribe(res=>{
this.data=res.results
if(this.data.length >0){
  this.show=true
}
},err=>{
  this.show=true
  this.error=true
})
  }

}
