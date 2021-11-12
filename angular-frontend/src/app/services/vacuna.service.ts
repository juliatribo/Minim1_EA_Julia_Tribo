import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Vacuna} from '../interfaces/Vacuna'

@Injectable({
  providedIn: 'root'
})
export class VacunaService {

  URI="http://localhost:4002/minimExemple/vacunas"
  constructor(private http:HttpClient) { }

  createVacuna(vacuna:Vacuna){
    return this.http.post<Vacuna>(this.URI,vacuna)
  }

  getVacunas(){
    return this.http.get<Vacuna[]>(this.URI)
  }

  getVacuna(id:string){
    return this.http.get<Vacuna>(this.URI+'/'+id)
  }
  updateVacuna(vacuna:Vacuna){
    return this.http.put(this.URI+'/'+vacuna._id,vacuna)
  }
}
