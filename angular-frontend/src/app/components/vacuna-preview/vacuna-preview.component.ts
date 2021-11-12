import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Vacuna } from 'src/app/interfaces/Vacuna';
import { VacunaService} from 'src/app/services/vacuna.service';
import { PersonaService} from 'src/app/services/persona.service';
import { Persona } from 'src/app/interfaces/Persona'; 

@Component({
  selector: 'app-vacuna-preview',
  templateUrl: './vacuna-preview.component.html',
  styleUrls: ['./vacuna-preview.component.css']
})
export class VacunaPreviewComponent implements OnInit {

  fiable:boolean;
  id:string;
  vacuna:Vacuna;
  personas:Array<Persona>;
  constructor(private activeRoute:ActivatedRoute, private vacunaService:VacunaService, private router:Router, private personaService:PersonaService) { 
    this.id="";
    this.vacuna=<Vacuna>{};
    this.fiable=false;
    this.personas=[];
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      res=> {this.id=res['id']
      this.vacunaService.getVacuna(this.id).subscribe(
        res=> {this.vacuna=res
        this.fiable=this.vacuna.fiable},
        err=>console.log(err)
      )
    },
      err=>console.log(err)
    )
    this.personaService.getPersonas().subscribe(
      res=>{
        console.log(res)
        this.personas=res
      },
      err=>console.log(err)
    )
  }

  updatedVacuna(name:HTMLInputElement,descripcion:HTMLInputElement,tecnologia:HTMLInputElement,fecha:HTMLInputElement){
    let newDate = new Date(fecha.value);
    let vacuna={"_id":this.vacuna._id,"name":name.value,"descripcion":descripcion.value,"tecnologia":tecnologia.value,"fecha":newDate,"fiable":this.fiable,"personas":this.vacuna.personas}
    this.vacunaService.updateVacuna(vacuna).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    this.router.navigate(['vacunas'])

  }

  onChange(value:boolean){
    this.fiable = value;
  }

  addPersona(name:HTMLInputElement,edad:HTMLInputElement):boolean{
    let persona={"_id":"","name":name.value,"edad":+edad.value}
    let id:any="";
    this.personaService.createPersonas(persona).subscribe(
      res=>{console.log(res)
        id=res._id;
        let vacuna={"_id":this.vacuna._id,"name":this.vacuna.name,"descripcion":this.vacuna.descripcion,"tecnologia":this.vacuna.tecnologia,"fecha":this.vacuna.fecha,"fiable":this.vacuna.fiable,"personas":this.vacuna.personas?.concat(id)}
        this.vacunaService.updateVacuna(vacuna).subscribe(
          res=>{console.log(res)
            location.reload()},
          err=>console.log(err)
        )
      },
      err=>console.log(err)
    )
    return false

  }

}
