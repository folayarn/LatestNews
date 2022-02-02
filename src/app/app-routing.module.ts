import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NewsByCountryComponent } from './pages/news-by-country/news-by-country.component';

const routes: Routes = [
  {path:'',component:IndexPageComponent},
  {path:'category/:category',component:CategoryPageComponent},
  {path:'country/:country',component:NewsByCountryComponent},
  {path:'**', redirectTo: '',pathMatch:'full'}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
