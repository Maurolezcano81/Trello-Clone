import jsonwebtoken from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';


export const createToken = async (data) => {
    const token = await jsonwebtoken.sign(data, process.env.JSON_TOKEN, {
        expiresIn: '1h'
    })

    return token;
}

export const encryptPwd = async (pwd) => {
    const hashedPwd = bcryptjs.hash(pwd, 10)

    return hashedPwd;
}

export const comparePwd = async (pwdPlain, pwdHashed) =>{
    const compare = await bcryptjs.compare(pwdPlain, pwdHashed);
    return compare;
}

export const verifyToken = async (req, res, next) =>{

    next();
}
