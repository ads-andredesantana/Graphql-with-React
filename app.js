const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

// Middleware to handle the function and create the Schema
app.use('/graphql', graphqlHTTP({



}));


app.listen(4000, () => {
  console.log('Listening on Port 4000');

});