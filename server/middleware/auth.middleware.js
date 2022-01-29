import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();

const auth = async (req, res, next) => {
    //1. get token from req headers
    //2. verify user id from token
    //3. If everything is ok do next 
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)
        const isCustomAuth = token.length < 500;
        
        if (token && isCustomAuth) {
            const decodedData = jwt.verify(token, process.env.JWT_SECRET)
            req.userId = decodedData?.id
        } else {
            const decodedData = jwt.decode(token)
            req.userId = decodedData?.sub
        }
        next()
    } catch (err) {
        console.log(err)
    }
}

export default auth;