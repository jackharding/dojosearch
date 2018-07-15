import express from 'express';

import dojoRoutes from './dojo';
import authRoutes from './auth';

const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

router.use('/dojos', dojoRoutes);
router.use('/auth', authRoutes);

router.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

router.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
})

module.exports = router;