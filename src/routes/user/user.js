require('dotenv').config();
const express = require('express');
const router = express.Router();
const {createUser} = require('./userDao.js'); 

/**
 * route to post a user
 */
router.post('/', async(req, res) =>{
   const {name, lastname, password, dni, profile_picture, email, phone, typeUser, address, place} = req.body;
   /**
    * Crear ruta
    */
   // TODO: Validaciones de datos
    let response = await  createUser(req.body);
    return response?res.status(200).send(response): res.status(400).send({msg: 'impossible to add user'});
});

/**
 * route to get a user
 */
router.get('/', async (req, res) =>{
    //crear get user
});

module.exports = router;