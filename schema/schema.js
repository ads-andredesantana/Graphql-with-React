const graphql = require('graphql');

const { GraphqlObjectType, GraphQLString, GraphQlSchema } = graphql;

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

      }
    }
  }
});

module.exports = new GraphQlSchema({
  query: RootQuery
});