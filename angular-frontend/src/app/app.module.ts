import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonaPreviewComponent } from './components/persona-preview/persona-preview.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonaPreviewComponent,
    PersonaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
