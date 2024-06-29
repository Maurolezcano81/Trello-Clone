import BaseModel from "./BaseModel.js";

class Entity extends BaseModel{
    constructor(){
        super('entity')
    }


    async getEntityByUser (value) {
        try {
            const query = `SELECT * FROM ${this.model} e join user u on e.id_entity = u.entity_fk where u.entity_fk = ?`

            const [results] = await this.con.promise().query(query, [value]);

            return results;
        } catch (error) {
            console.error(error.message);
            throw new Error("Error en ENTITY: " + error.message);
        }
    }
}

export default Entity;