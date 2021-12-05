import Curso from "../models/Curso";
import { Cursos } from "../data/cursos";
import Usuario from "../models/Usuario";
import bcrypt from "bcrypt";

export const resolvers = {
    Query: {
        Hola: (parent, args) => {
            return "Hola " + args.nombre;
        },
        Cursos(){

            //devuelve desde el arreglo 
            //return Cursos
            // devuelve desde mongoDb
            return Curso.find();
        },
        async Login(_,{email,password}) {
            
            const usuario = await Usuario.findOne({
                email
            });
            
            if(!usuario)
            {
                return "usuario o password incorrectos";
            }

            const validarPassword = bcrypt.compareSync(password,usuario.password)
           
            if(validarPassword)
            {
                return "exitoso";
            }
            else
            {
                return "usuario o password incorrectos";
            }
        }
    },
    Mutation: {
        async AgregarCurso(_, {curso}){
            /*const nCurso = new Curso({

                nombre: curso.nombre,
                lenguaje: curso.lenguaje,
                fecha: curso.fecha
            });
            return await nCurso.save();*/
            //Retorna el curos agregado
            const nCurso = new Curso(curso);
            
            return await nCurso.save();
        },
        async AgregarUsuario(_, {usuario}){
            
            const salt = bcrypt.genSaltSync();
            let nUsuario = new Usuario(usuario);
            nUsuario.password = bcrypt.hashSync(usuario.password,salt);
            return await nUsuario.save();
        }
    }
};
