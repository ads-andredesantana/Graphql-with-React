const graphql = require('graphql');
const_ = require('lodash');

const { GraphqlObjectType, GraphQLString, GraphQlSchema } = graphql;

// Dummy data to start and test
var books = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
  { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
  { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

// Describing the Book
const BookType = new GraphqlObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { GraphQLString }
  })
});

// Defining root queries
const RootQuery = new GraphqlObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // Code to get data from db / other source
        return _.find(books, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQlSchema({
  query: RootQuery
});