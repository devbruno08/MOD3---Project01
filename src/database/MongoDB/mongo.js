const mongoose = require('mongoose');

function mongoConnect() {
  mongoose
    .connect(
      'mongodb+srv://admin:admin@cluster0.2ixjxc3.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => {
      console.log('Database connected');
    })
    .catch((err) => {
      console.log('Error in database: ', err);
    });
}

module.exports = mongoConnect;
