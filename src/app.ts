import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from "./graphql";
import cors from "cors";
import mongoose from "mongoose";

// load env variables into process.env
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// (){} : ! # _ => ""
const bootstrapApp = async () => {
  // start server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  // middleware's
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/graphql", expressMiddleware(server));

  // start express server
  // console.log(process.env.DBURI);
  // mongoose
  // .connect(process.env.DBURI || '/')
  // .then(() => {
  //   app.listen(port, () => {
  //     console.log(`🚀 Express Server ready at http://localhost:${port}`);
  //     console.log(`🚀 Graphql Server ready at http://localhost:${port}/graphql`);
  //   });
  // })
  // .catch((err) => { throw new Error(`Failed to connect to Database`,); });

  app.listen(port, () => {
    console.log(`🚀 Express Server ready at http://localhost:${port}`);
    console.log(`🚀 Graphql Server ready at http://localhost:${port}/graphql`);
  });

  // routes
  app.get("/", (req, res) => {
    res.json({ data: { routes: "Server up and running" } });
  });
};
bootstrapApp();
