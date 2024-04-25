const jwt = require("jsonwebtoken");
require('dotenv').config();


const PRIVATE_KEY = process.env.PRIVATE_KEY;
const user = {
    name: "admin",
    email: "admin@admin.com"
}

module.exports.tokenValidated = function ( request, response, next){
    const token = request.headers.authorization;

    if(!token){
        return response.status(401).json({message: "Token não informado"});
    }

    try {
        const decoded = jwt.verify(token, PRIVATE_KEY);
        const userIdFromToken = typeof decoded !== "string" && decoded.user;

        if (!user && !userIdFromToken) {
            return response.status(401).json({message: "Token inválido"});
        }

        request.headers["user"] = decoded.user;
        return next();
    } catch (error) {
        return response.status(401).json({message: "Token inválido"});
    }
}