import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountriesComponent } from './components/header/countries/countries.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { CardComponent } from './components/card/card.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NewsByCountryComponent } from './pages/news-by-country/news-by-country.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    SubHeaderComponent,
    CardComponent,
    CategoryPageComponent,
    IndexPageComponent,
    NewsByCountryComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
