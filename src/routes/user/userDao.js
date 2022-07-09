const { user } = require("../../db.js");


let createUser = async (newUser) => {
    try {
        return await user.create({...newUser});
    } catch (error) {
        console.log(error)
        return false
    }
}

function eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

module.exports = {
    createUser
}