require('dotenv').config();
const express = require('express');
const router = express.Router();
const {} = require('./userDao.js'); 

/**
 * route to post a user
 */
router.post('/', async(req, res) =>{
   const {name, lastname, password, dni, profile_picture, email, phone, typeUser, address, place} = req.body;
   /**
    * Crear ruta
    */
});

/**
 * route to get a user
 */
router.get('/', async (req, res) =>{
    //crear get user
});

module.exports = router;