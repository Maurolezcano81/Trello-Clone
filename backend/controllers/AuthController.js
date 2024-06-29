import Auth from '../models/Auth.js';
import BaseModel from '../models/BaseModel.js';
import { encryptPwd } from "../middlewares/Authorization.js";
import dotenv from 'dotenv';

dotenv.config();

class AuthController {
    constructor() {
        this.model = new Auth();
        this.entity = new BaseModel('entity');
        this.user = new BaseModel('user');
        this.nacionality = new BaseModel('nacionality');
    }

    async signup(req, res) {
        const { name_entity, lastname_entity, birth_data_entity, nacionality_fk, name_user, pwd_user, avatar_url, job_user, department_user } = req.body;

        const newEntity = {
            name_entity,
            lastname_entity,
            birth_data_entity,
            nacionality_fk
        }

        try {
            const checkUser = await this.user.getOne(name_user, 'name_user');

            if (checkUser.length > 0) {
                return res.status(403).json({
                    message: "Este nombre de usuario ya existe"
                });
            }

            const checkNacionality = await this.nacionality.getOne(nacionality_fk, 'id_nacionality');

            if(checkNacionality.length < 1){
                return res.status(403).json({
                    message: "Debe seleccionar una nacionalidad existente"
                })
            }

            const insertEntity = await this.entity.createOne(newEntity);

            if (insertEntity.results < 1) {
                return res.status(403).json({
                    message: "No se ha podido crear el usuario, intentelo de nuevo"
                });
            };

            const hashedPwd = await encryptPwd(pwd_user);

            const newUser = {
                name_user: name_user,
                pwd_user: hashedPwd,
                avatar_url: avatar_url,
                entity_fk: insertEntity.lastId,
                job_user: job_user,
                department_user: department_user
            }

            const insertUser = await this.model.register(newUser);

            if (insertUser.results < 1) {
                return res.status(403).json({
                    message: "No se ha podido crear el usuario, intentelo de nuevo",
                })
            }

            return res.status(200).json({
                message: "Usuario creado exitosamente",
                userData: {
                    insertUser
                }
            })

        } catch (error) {
            console.error(error.message);
            return res.status(500).json({
                message: "Error interno del servidor"
            });
        }
    }
}

export default AuthController;
