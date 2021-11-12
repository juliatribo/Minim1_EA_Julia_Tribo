import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Persona} from '../interfaces/Persona'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URI="http://localhost:4002/minimExemple/personas";
  constructor(private http:HttpClient) { }

  createPersonas(persona:Persona){
    return this.http.post<Persona>(this.URI,persona)
  }

  getPersonas(){
    return this.http.get<Persona[]>(this.URI)
  }

  getPersona(id:string){
    return this.http.get<Persona>(this.URI+'/'+id)
  }
  updatePersona(persona:Persona){
    return this.http.put(this.URI+'/'+persona._id,persona)
  }

}
