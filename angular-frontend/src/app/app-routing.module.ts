import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaPreviewComponent } from './components/persona-preview/persona-preview.component';

const routes: Routes = [

  {
    path: 'personas',
    component:PersonaListComponent
  },
  {
    path: 'personas/:id',
    component:PersonaPreviewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
