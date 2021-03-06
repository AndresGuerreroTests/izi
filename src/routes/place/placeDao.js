const { place } = require("../../db.js");

/**
 * creates a place in the database based on two 
 * attributes that enter, name and id of the 
 * location where the place is located
 */
let createPlace = async (name, located) => {
    try {
        name = name.toUpperCase();
        located = located?.toUpperCase();
        return await place.create({
            name,
            located
        });
    } catch (error) {
        console.log(error)
        return false
    }
}
/**
 * search for a place by name
 * @param {*} name 
 * @returns 
 */
let findName = async (name) =>{
    try {
        return await place.findOne({ 
            where: {
                name: eliminarDiacriticos(name).toUpperCase(),
            } 
        }); 
    } catch (error) {
        return false;
    }
}
/**
 * Search for a place by name, if not, it creates it
 * @param {*} name 
 * @param {*} id 
 * @returns 
 */
let findNameOrCreate = async (name, id) =>{
    try {
        return await place.findOrCreate({
            where: {
                name: eliminarDiacriticos(name).toUpperCase(),
                located: id
            }
          });
    } catch (error) {
        return false;
    }
}

/**
 * Remove ´, (), ñ, +, example: BOYACÁ => BOYACA
 * @param {} texto 
 * @returns 
 */
function eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}


module.exports = {
    createPlace,
    findName,
    findNameOrCreate
}