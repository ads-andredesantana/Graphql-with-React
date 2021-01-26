const graphql = require('graphql');

const { GraphqlObjectType, GraphQLString } = graphql;

// Describing the Book
const BookType = new GraphqlObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { GraphQLString }
  })
});