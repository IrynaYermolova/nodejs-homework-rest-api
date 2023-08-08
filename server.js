// const app = require('./app')
// const mongoose = require('mongoose')

// const {DB_HOST} = require('./config')
// mongoose.set('strictQuery', true);

// mongoose
//    .connect(DB_HOST)
//    .then(app.listen(3000, () => {
//     console.log("Database connect success")
//   })
//   )
//    .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//    });


  const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

