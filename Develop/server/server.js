const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const { typeDefs, resolvers } = require('./schema/index'); 
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

async function startApolloServer() {
  // Create an instance of ApolloServer
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Wait for the server to start before applying middleware
  await server.start();

  // Apply the ApolloServer middleware to the Express app
  server.applyMiddleware({ app });


  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  });
}

startApolloServer();
