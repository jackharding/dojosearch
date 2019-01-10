// import db from '../../database';
import express from 'express';
import fs from 'fs';

import { addDojo, getDojos, getDojoBySlug } from '../../controllers/dojoController';
// import All ,{ dojo} from '../../database';

const router = express.Router();

router.get('/', getDojos);
router.get('/:slug', getDojoBySlug);

router.post('/add', addDojo);


module.exports = router;