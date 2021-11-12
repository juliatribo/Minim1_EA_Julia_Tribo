import { Component, OnInit } from '@angular/core';
import {Vacuna} from '../../interfaces/Vacuna'
import { VacunaService } from 'src/app/services/vacuna.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacuna-list',
  templateUrl: './vacuna-list.component.html',
  styleUrls: ['./vacuna-list.component.css']
})
export class VacunaListComponent implements OnInit {

  vacunas:Array<Vacuna>;
  date:string|null;
  constructor(private vacunaService:VacunaService, private router:Router) { 
    this.vacunas=[]
    this.date="";
  }

  ngOnInit(): void {
    this.vacunaService.getVacunas().subscribe(
      res=> this.vacunas=res,
      err=> console.log(err)
    )
  }
  
  selectedVacuna(id:string|undefined){
    this.router.navigate(['vacunas/'+id])
  }

}