import express from 'express';

import { withErrorHandling } from './utils';

const router = express.Router();

import { index, show, create, update } from '../controllers/usuario_controller';


router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(create));
router.put('/:id', withErrorHandling(update));
export default router;