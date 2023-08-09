import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { applyMiddleware } from "graphql-middleware";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from "./graphql";
import cors from "cors";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import { GraphQLError } from "graphql";
import permissions from "./permissions";
import { makeExecutableSchema } from "@graphql-tools/schema"


// load env variables into process.env
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// (){} : ! # _ => ""
const bootstrapApp = async () => {
  // Create apollo server
  const server = new ApolloServer({
    schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }), permissions)
  });
  
  await server.start();

  // middleware
  // server.applyMiddleware({ app });
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req }) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (token) {
          const user = decodeToken(token);
          return { user };
        }
        return { user: null};
      }, 
    })
  );

  // listen
  const dbURI = process.env.DBURI || "";
  mongoose
    .connect(dbURI)
    .then(() => {
      app.listen(port, () => {
        console.log(`🚀 Express Server ready at http://localhost:${port}`);
        console.log(`🚀 Graphql Server ready at http://localhost:${port}/graphql`);
      });
    })
    .catch((err) => console.log(err));

  // routes
  app.get("/", (req, res) => {
    res.json({ data: { routes: "Server up and running" } });
  });
};
bootstrapApp();


const decodeToken = (token: string) => {
  try {
    const user = jwt.verify(token, `${process.env.SECRET_KEY}`)
    return user;
  } catch (err: any) {
    throw new GraphQLError(err.message);
  }
}