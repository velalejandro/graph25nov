import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        Hola( nombre: String! ):  String
        Cursos : [Curso]
        Login(email: String!, password: String!): String 
    }

    type Mutation {
        AgregarCurso(curso : CursoInput): Curso
        AgregarUsuario(usuario: UsuarioInput): Usuario
    }


    type Usuario {
        id: ID
        nombre: String,
        email: String,
        password: String
    }

    input UsuarioInput {
        nombre: String,
        email: String,
        password: String

    }

    type Curso {
        id: ID,
        nombre: String,
        lenguajes: [Lenguaje],
        fecha: String
    }

    type Lenguaje {
        lenguaje: String
    }

    input CursoInput {
        
        nombre: String,
        lenguajes: [LenguajeInput],
        fecha: String
    }

    input LenguajeInput {
        lenguaje: String
    }
`;

export default makeExecutableSchema({
    typeDefs : typeDefs,
    resolvers : resolvers
})