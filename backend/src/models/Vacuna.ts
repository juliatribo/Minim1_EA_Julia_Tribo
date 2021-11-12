import { Schema, model, Document } from "mongoose";

//el esquema es para mongoose, para la base de datos
const schema = new Schema({
    name: String,
    descripcion: String,
    tecnologia: String,
    fecha: Date

    
})

//la interfaz es una descripcion del objeto para que ts sepa como es el schema (el document describe una estructura tipicaa de mongodb)
export interface IVacuna extends Document {
    name: string,
    descripcion: string,
    tecnologia: string,
    fecha: Date,
}

export default model<IVacuna>('Vacuna', schema);

