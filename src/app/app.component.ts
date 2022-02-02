import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
isOpen:boolean=false
  open: boolean=false;
  constructor(){}
ngOnInit():void{
}
  title = 'latestnews';

  searchData:Array<any>=[{name:'Arabic',value:'ar'},
  {name:'Bosnian',value:'bs'},
   {name:'Bulgarian',value:'bg'},
   {name:'Chinese',value:'zh'},
   {name:'Croatian',value:'hr'},
  {name:'Czech',value:'cs'},
   {name:'Dutch',value:'nl'},
   {name:'English',value:'en'},
   {name:'French',value:'fr'},
   {name:'German',value:'de'},
   {name:'Greek',value:'el'},
   {name:'Hebrew',value:'he'},
   {name:'Hindi',value:'hi'},
   {name:'Italian',value:'it'},
   {name:'Japanese',value:'jp'},
   {name:'Korean',value:'ko'},
   {name:'Hungarian',value:'hu'},
   {name:'Latin',value:'lt'},
   {name:'Indonesian',value:'in'},
   {name:'Latvian',value:'lv'},
   {name:'Lithuanian',value:'lt'},
   {name:'Malay',value:'ms'},
   {name:'Norwegian',value:'no'},
   {name:'Polish',value:'pl'},
   {name:'Portuguese',value:'pt'},
   {name:'Romanian',value:'ro'},
   {name:'Russian',value:'ru'},
   {name:'Slovak',value:'sk'},
   {name:'Spanish',value:'es'},
   {name:'Serbian',value:'sr'},
   {name:'Slovenian',value:'sl'},
   {name:'Swedish',value:'sw'},
   {name:'Thai',value:'th'},
   {name:'Turkish',value:'tr'},
   {name:'Ukrainian',value:'uk'}]

Category:Array<any>=['business',
    'entertainment',
    'environment',
    'food',
    'health',
    'politics',
    'science',
    'sports',
    'technology',
    'top',
    'world']


    onClick(){
      this.isOpen=!this.isOpen
      console.log(this.isOpen)
    }

    setDrawer(){
      this.open=!this.open
    }
}
