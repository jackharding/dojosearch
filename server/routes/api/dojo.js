import express from 'express';
import fs from 'fs';

import { addDojo } from '../../controllers/dojoController';

const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({
		dojos: [
			{
				thing: 'one'
			},
			{ 
				thing: 'two'
			},
		]
	});
});

router.post('/add', addDojo);

module.exports = router;