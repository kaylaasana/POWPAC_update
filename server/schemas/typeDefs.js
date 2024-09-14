const { gql } = require('apollo-server');

const typeDefs = gql`
  type Shows {
    title: String!
    datesOfPerformance: DatesOfPerformance
    production: [String!]!
    cast: [String!]!
  }

  type DatesOfPerformance {
    startDate: String
    endDate: String
  }

  type Query {
    getShow(showID: ID!): Shows
    getShowsByTitle(title: String!): [Shows]
    getShowsByDatesOfPerformance(datesOfPerformance: String!): [Shows]
    getShowsByProduction(production: String!): [Shows]
    getShowsByCast(cast: String!): [Shows]
  }
`;


module.exports = typeDefs;
