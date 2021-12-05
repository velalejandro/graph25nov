import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "../src/graphql/schema";
import { dbconnection } from "./database/config";

const app = express();

dbconnection();

app.use("/graphql",graphqlHTTP({
    graphiql: true,
    schema: schema
}));


app.listen(process.env.PORT || 4000, ()=> {
    console.log(`servidor ejecutandose en el puerto: ${process.env.PORT || 4000}`);
});


