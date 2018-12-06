import db from '../../database';
import express from 'express';
import fs from 'fs';

import { addDojo } from '../../controllers/dojoController';
import All ,{ dojo} from '../../database';

const router = express.Router();

router.get('/', (req, res) => {
	dojo.findAll()
		.then(res => {
			console.log(res);
		})
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

// router.post('/add', addDojo);

module.exports = router;