import Persona from '../models/Persona';
import {Request, Response} from 'express';

/*
name: string,
vacunas: IVacuna['_id']
*/

export async function createPersona(req: Request,res: Response): Promise<Response>{

    const{name, vacunas} = req.body;
    const newPerson = {
        name: name,
        vacunas: vacunas
    };
    const persona = new Persona(newPerson);
    await persona.save();
    return res.json(persona)
}

export async function getPersonas(req: Request,res: Response): Promise<Response>{
    const personas = await Persona.find(); //find me retorna todas las subjects que tengo almaacenadas (las he guaardado con el save abajo)
    return res.json(personas);
}

export async function getPersona(req: Request,res: Response): Promise<Response>{
    const persona = await Persona.findById(req.params.id);
    return res.json(persona);
}

export async function updatePersona(req: Request,res: Response): Promise<Response>{
    const{id} = req.params;
    const{name, vacunas} = req.body;
    console.log(req.body)
    const updatedPersona = await Persona.findByIdAndUpdate(id,{
        name,
        vacunas
    }, {new: true}); //para que retorne el objeto modificado sino retorna el de antes de modificarlo
    return res.json({
        message: 'Succesfully Updated',
        updatedPersona
    });
}

