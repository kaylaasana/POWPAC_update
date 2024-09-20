const { gql } = require("apollo-server");

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

  type Mutation {
    createShow(
      title: String!
      datesOfPerformance: DatesOfPerformanceInput!,
      production: [String!]!,
      cast: [String!]!
    ): Show
    updateShow(
      title: String!
      datesOfPerformance: DatesOfPerformanceInput!,
      production: [String!]!,
      cast: [String!]!
    ): Show
    deleteShow(showID: ID!): Show
  }
`;

module.exports = typeDefs;
