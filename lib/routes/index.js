import express from 'express';

import carreras from './carreras';

import rol from './rol';

import materia from './materia';

import usuario from './usuario';

const router = express.Router();

router.use('/carreras', carreras);
router.use('/rol', rol);
router.use('/materia', materia);
router.use('/usuario', usuario);

export default router;
