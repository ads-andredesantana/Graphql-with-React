const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();


// Creating connection with MongoDB
mongoose.connect('mongodb+srv://fernandes30:$Bootcamp123@react-gql.uau7a.mongodb.net/react-gql?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database');
});


// Middleware to handle the function and create the Schema
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(4000, () => {
  console.log('Listening on Port 4000');
});