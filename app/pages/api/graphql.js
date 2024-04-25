import { ApolloServer } from 'apollo-server-micro';
import {typeDefs, resolvers} from './index';

//Pass in the schema and resolvers to set up gql server
const apolloServer = new ApolloServer({typeDefs, resolvers});

//configure next.js to not parse the 
//incomming request body and allow 
//gql to do the job
const config = {
  api: {
    bodyParser: false,
  }
};

//set the path of the entry point
export default apolloServer.createHandler({api: '/api/graphql'});