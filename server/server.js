// require("dotenv").config();
// const express = require("express");
// const { graphqlHTTP } = require('express-graphql');
// const { buildSchema } = require('graphql');
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => console.error(err));

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`API server running on port ${PORT}!`);
//   console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
// });

const express = require('express');
const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
// const { authMiddleware } = require('./utils/auth');


/**
 * Database setup
 */
// const { typeDefs, resolvers } = require('./schemas');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const db = require('./config/connection');

const PORT = process.env.PORT || 5000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

/**
 * Apollo Server
 */
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }
  
//   app.use('/graphql', expressMiddleware(server, {
//     context: authMiddleware
//   }));

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
