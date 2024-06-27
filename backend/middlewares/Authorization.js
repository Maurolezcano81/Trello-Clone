import jsonwebtoken from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';


const createToken = (data) =>{
    const token = jsonwebtoken.sign(data, process.env.JSON_TOKEN, {
        expiresIn: '1h'
    })

    return token;
}

// const validateToken = (token) =>{
//     jsonwebtoken.verify(token, process.env.JSON_TOKEN, {

//     })
// }