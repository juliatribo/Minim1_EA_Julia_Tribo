import {Router} from 'express';

const router = Router(); //crea con express un enrutador --> es un objeto para poner dentro tus rutas o las url del servidor

import {createStudent,getStudents,getStudent, deleteStudent, updateStudent} from '../controllers/student.controller'
import {createSubject,getSubjects,getSubject, deleteSubject, updateSubject} from '../controllers/subject.controller'
import {createVacuna,getVacunas,getVacuna, deleteVacuna, updateVacuna} from '../controllers/vacuna.controller'
import {createPersona, getPersonas, getPersona,updatePersona} from '../controllers/persona.controller'


router.route('/students')
    .get(getStudents)
    .post(createStudent)

router.route('/students/:id')
    .get(getStudent)
    .delete(deleteStudent)
    .put(updateStudent)

router.route('/subjects')
    .get(getSubjects)
    .post(createSubject)

router.route('/subjects/:id')
    .get(getSubject)
    .delete(deleteSubject)
    .put(updateSubject)

router.route('/vacunas')
    .get(getVacunas)
    .post(createVacuna)

router.route('/vacunas/:id')
    .get(getVacuna)
    .delete(deleteVacuna)
    .put(updateVacuna)
router.route('/personas')
    .post(createPersona)
    .get(getPersonas)
router.route('/personas/:id')
    .get(getPersona)
    .put(updatePersona)


export default router;