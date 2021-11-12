import {Vacuna} from './Vacuna'
export interface Persona {
    _id?:string
    name: string;
    vacunas: Vacuna['_id']
}