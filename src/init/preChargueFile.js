const {createPlace, findNameOrCreate, findName } = require('../routes/place/placeDao.js');
const {createSize} = require('../routes/size/sizeDao.js');
const axios = require('axios');
//https://www.datos.gov.co/resource/xdk5-pm3f.json
//https://apis.datos.gob.ar/georef/api/provincias
//https://apis.datos.gob.ar/georef/api/municipios?provincia=14&campos=nombre&max=428

/**
 * this method reads apis and preloads the information is 
 * temporary while the database is just filled and the "force" becomes false.
 */

let user = [
    {
        name: '1',
        lastname: 'suarez',
        password: '2jmk3218',
        dni: '1049653787',
        profile_picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_675923-MCO45458200511_042021-F.webp',
        email: '2jmk3218@gmail.com',
        phone: '3177833860',
        typeUser: 'N',
        address: 'cra 2a este #4a-13',
        place: 'tunja'
    },
    {
        name: '2',
        lastname: 'suarez',
        password: '2jmk3218',
        dni: '1049653787',
        profile_picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_675923-MCO45458200511_042021-F.webp',
        email: '2jmk3218@gmail.com',
        phone: '3177833860',
        typeUser: 'N',
        address: 'cra 2a este #4a-13',
        place: 'tunja'
    },
    {
        name: '3',
        lastname: 'suarez',
        password: '2jmk3218',
        dni: '1049653787',
        profile_picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_675923-MCO45458200511_042021-F.webp',
        email: '2jmk3218@gmail.com',
        phone: '3177833860',
        typeUser: 'N',
        address: 'cra 2a este #4a-13',
        place: 'tunja'
    },
    {
        name: '4',
        lastname: 'suarez',
        password: '2jmk3218',
        dni: '1049653787',
        profile_picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_675923-MCO45458200511_042021-F.webp',
        email: '2jmk3218@gmail.com',
        phone: '3177833860',
        typeUser: 'N',
        address: 'cra 2a este #4a-13',
        place: 'tunja'
    },
    {
        name: '5',
        lastname: 'suarez',
        password: '2jmk3218',
        dni: '1049653787',
        profile_picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_675923-MCO45458200511_042021-F.webp',
        email: '2jmk3218@gmail.com',
        phone: '3177833860',
        typeUser: 'N',
        address: 'cra 2a este #4a-13',
        place: 'tunja'
    },
    {
        name: '6',
        lastname: 'suarez',
        password: '2jmk3218',
        dni: '1049653787',
        profile_picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_675923-MCO45458200511_042021-F.webp',
        email: '2jmk3218@gmail.com',
        phone: '3177833860',
        typeUser: 'N',
        address: 'cra 2a este #4a-13',
        place: 'tunja'
    },
    {
        name: '7',
        lastname: 'suarez',
        password: '2jmk3218',
        dni: '1049653787',
        profile_picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_675923-MCO45458200511_042021-F.webp',
        email: '2jmk3218@gmail.com',
        phone: '3177833860',
        typeUser: 'N',
        address: 'cra 2a este #4a-13',
        place: 'tunja'
    },
    {
        name: '8',
        lastname: 'suarez',
        password: '2jmk3218',
        dni: '1049653787',
        profile_picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_675923-MCO45458200511_042021-F.webp',
        email: '2jmk3218@gmail.com',
        phone: '3177833860',
        typeUser: 'N',
        address: 'cra 2a este #4a-13',
        place: 'tunja'
    },
    {
        name: '9',
        lastname: 'suarez',
        password: '2jmk3218',
        dni: '1049653787',
        profile_picture: 'https://http2.mlstatic.com/D_NQ_NP_2X_675923-MCO45458200511_042021-F.webp',
        email: '2jmk3218@gmail.com',
        phone: '3177833860',
        typeUser: 'N',
        address: 'cra 2a este #4a-13',
        place: 'tunja'
    }
]

const chargue = async() =>{
    try {
        let sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
        let col = await createPlace('colombia', null);
        let arg = await createPlace('argentina', null);
        //let per = await createPlace('peru', null); //solo si carla copera
        let chargeCOL = await axios.get('https://www.datos.gov.co/resource/xdk5-pm3f.json'); //deparamentos y ciudades
        chargeCOL = chargeCOL.data;
        for(let i = 0; i<chargeCOL.length; i++){
            await findNameOrCreate(chargeCOL[i].departamento, col.dataValues.id) //departamentos
        }
        for(let i = 0; i<chargeCOL.length; i++){
            let e = await findName(chargeCOL[i].departamento);
            await findNameOrCreate(chargeCOL[i].municipio, e.dataValues.id); //ciudad
        } 
        let chargeArg = await axios.get('https://apis.datos.gob.ar/georef/api/provincias'); //provicias
        chargeArg = chargeArg.data.provincias;
        let chargeArgM = "";
        let ele = "" //municipios
        let arrMu = []
        for(let i = 0; i<chargeArg.length; i++){
            ele =  await findNameOrCreate(chargeArg[i].nombre, arg.dataValues.id); //crea provicia
            chargeArgM = await axios.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${chargeArg[i].id}&campos=nombre&max=428`); //crea ciudades de provicias
            chargeArgM = chargeArgM.data.municipios
            for(let j = 0; j<chargeArgM.length; j++){
               await  findNameOrCreate(chargeArgM[j].nombre, ele[0].dataValues.id);
            }
        }
        for(let i = 0; i < sizes.length; i++){
            await createSize(sizes[i]);
        }
        console.log('sucessfully');
    } catch (error) { 
        console.log(error)
    }
}

module.exports = {
    chargue
}