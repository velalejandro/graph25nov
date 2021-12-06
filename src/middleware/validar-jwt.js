import jwt from "jsonwebtoken";

const secret = "mi_llave";

export const validarJWT = (req, res, next) =>{
    let token = "";
    token = req.headers["x-access-token"] || req.headers["authorization"];
    console.log(token);
    if(!token)
    {
        req.user ={
            auth: false
        }
        return next();
    }
    if(token.startsWith("Bearer "))
    {
        token = token.slice(7,token.length)
        console.log(token)
    }
    try {
        const {uid,nombre} = jwt.verify(token,secret);
        console.log("args",uid,nombre);
        req.user ={
            auth: true
        }
        return next();
    } catch (error) {
        req.user ={
            auth: false
        }
        return next();
    }


}