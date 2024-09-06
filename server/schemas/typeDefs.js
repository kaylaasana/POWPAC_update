const { gql } = require('apollo-server');

const typeDefs = gql`
  type Shows {
    _id: ID!
    title: String!
    datesOfPerformance: String!
    production: String!
    cast: String!
  }

  # Queries for Shows by different fields
  type Query {
    getShow(showID: ID!): Shows
    getShowsByTitle(title: String!): [Shows]
    getShowsByDatesOfPerformance(datesOfPerformance: String!): [Shows]
    getShowsByProduction(production: String!): [Shows]
    getShowsByCast(cast: String!): [Shows]
  }
`;

module.exports = typeDefs;
