import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectPreviewComponent } from './components/subject-preview/subject-preview.component';
import { StudentPreviewComponent } from './components/student-preview/student-preview.component';
import { VacunaListComponent } from './components/vacuna-list/vacuna-list.component';
import { VacunaPreviewComponent } from './components/vacuna-preview/vacuna-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SubjectListComponent,
    SubjectPreviewComponent,
    StudentPreviewComponent,
    VacunaListComponent,
    VacunaPreviewComponent
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
