import { Schema, model, Document } from "mongoose";
import Vacuna, {IVacuna} from './Vacuna'

//el esquema es para mongoose, para la base de datos
const schema = new Schema({
    name: String,
    vacunas:[{
        type: Schema.Types.ObjectId,
        ref: Vacuna
    }]

})

//la interfaz es una descripcion del objeto para que ts sepa como es el schema (el document describe una estructura tipicaa de mongodb)
export interface IPersona extends Document {
    name: string,
    vacunas: IVacuna['_id']
}

export default model<IPersona>('Persona', schema);

