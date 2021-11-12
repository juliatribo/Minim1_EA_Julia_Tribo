import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  personas:Array<Persona>;
  constructor(private personaService:PersonaService, private router:Router) {
    this.personas=[];
   }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(
      res=>{
        console.log(res)
        this.personas=res
      },
      err=> console.log(err)
    )
  }

  selectedPersona(id:string|undefined){
    this.router.navigate(['personas/'+id])
  }

}


