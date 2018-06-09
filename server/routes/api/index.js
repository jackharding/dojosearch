import express from 'express';

import dojoRoutes from './dojo';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

router.use('/dojos', dojoRoutes);

module.exports = router;