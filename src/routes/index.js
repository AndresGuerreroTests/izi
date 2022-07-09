const { Router } = require('express');
const placesRouter = require('./place/place.js');
const sizesRouter = require('./size/size.js');
const userRouter = require('./user/user.js');
const categoryRouter = require("./category/category")
//const genresRouter = require('./genres');
//const platformsRouter = require('./platforms');

const router = Router();
//rutas generales
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/places', placesRouter);
router.use('/sizes', sizesRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
//router.use('/genres', genresRouter);
//router.use('/platforms', platformsRouter);
//hago el pedido de video games ocomo genero

module.exports = router;