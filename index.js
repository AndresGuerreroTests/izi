const { default: axios } = require("axios");
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { chargue } = require("./src/init/preChargueFile.js");
const { createCategory } = require("./src/routes/category/categoryDao.js");
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    await chargue();
    console.log("%s listening at 3001");
  });
});
