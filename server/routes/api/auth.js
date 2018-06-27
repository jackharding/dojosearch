import express from 'express';
import fs from 'fs';

import { registerUser } from '../../controllers/userController';

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

router.post('/register', registerUser);

module.exports = router;