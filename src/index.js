import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "../src/graphql/schema";
import { dbconnection } from "./database/config";
import { validarJWT } from "./middleware/validar-jwt";

const app = express();
dbconnection();
app.use(validarJWT);

app.use("/graphql",graphqlHTTP((req)=>({
    graphiql: true,
    schema: schema,
    context : {
        user: req.user
    }
})));


app.listen(process.env.PORT || 4000, ()=> {
    console.log(`servidor ejecutandose en el puerto: ${process.env.PORT || 4000}`);
});


