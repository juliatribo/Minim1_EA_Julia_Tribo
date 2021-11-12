import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Vacuna } from 'src/app/interfaces/Vacuna';
import { VacunaService} from 'src/app/services/vacuna.service';
import { PersonaService} from 'src/app/services/persona.service';
import { Persona } from 'src/app/interfaces/Persona'; 

@Component({
  selector: 'app-persona-preview',
  templateUrl: './persona-preview.component.html',
  styleUrls: ['./persona-preview.component.css']
})
export class PersonaPreviewComponent implements OnInit {

  id:string;
  vacunas:Array<Vacuna>;
  persona:Persona;
  constructor(private activeRoute:ActivatedRoute, private vacunaService:VacunaService, private router:Router, private personaService:PersonaService) { 
    this.id="";
    this.vacunas=[];
    this.persona=<Persona>{};
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      res=> {this.id=res['id']
      this.personaService.getPersona(this.id).subscribe(
        res=> {this.persona=res},
        err=>console.log(err)
      )
    },
      err=>console.log(err)
    )
    this.vacunaService.getVacunas().subscribe(
      res=>{
        console.log(res)
        this.vacunas=res
      },
      err=>console.log(err)
    )
  }

  updatedPersona(name:HTMLInputElement){
    let persona:Persona={"_id":this.persona._id,"name":name.value, "vacunas":this.persona.vacunas}
    this.personaService.updatePersona(persona).subscribe(
      res=>{console.log(res)
     
      },
      err=>console.log(err)
    )
  }

  addVacuna(name:HTMLInputElement,descripcion:HTMLInputElement,tecnologia:HTMLInputElement,fecha:HTMLInputElement):boolean{
    let newDate = new Date(fecha.value);
    let vacuna={"_id":"","name":name.value,"descripcion":descripcion.value,"tecnologia":tecnologia.value,"fecha":newDate}

    let vacunaId:any="";
    this.vacunaService.createVacuna(vacuna).subscribe(
      res=>{console.log(res)
      vacunaId=res._id
      let updatedPerson={'_id':this.persona._id,'name':this.persona.name,'vacunas':this.persona.vacunas?.concat(vacunaId)}
      this.personaService.updatePersona(updatedPerson).subscribe(
        res=>{console.log(res)
        location.reload();},
        err=>console.log(err)
      )
      },
      err=>console.log(err))
      return false
    }



  

}
