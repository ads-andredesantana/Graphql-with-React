const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// Middleware to handle the function and create the Schema
app.use('/graphql', graphqlHTTP({
  schema
}));


app.listen(4000, () => {
  console.log('Listening on Port 4000');

});