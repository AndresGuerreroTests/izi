const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {chargue } = require('./src/init/preChargueFile.js')
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
    chargue();
  });
});