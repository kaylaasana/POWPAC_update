const { gql } = require("graphql-tag");

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
      datesOfPerformance: String!,
      production: [String!]!,
      cast: [String!]!
    ): Shows
    updateShow(
      title: String!
      datesOfPerformance: String!,
      production: [String!]!,
      cast: [String!]!
    ): Shows
    deleteShow(showID: ID!): Shows
  }
`;

module.exports = typeDefs;
