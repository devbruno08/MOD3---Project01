const { connect } = require('mongoose');

function mongoConnect() {
  connect('mongodb://localhost:27017/animes-db/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Database connected');
    })
    .catch((err) => {
      console.log('Error in database: ', err);
    });
};

module.exports = { mongoConnect };
