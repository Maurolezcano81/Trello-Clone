import Connection from "../config/database.js";

class Auth {
    constructor() {
        this.db = new Connection();
        this.con = this.db.createCon();
    }

    async signIn(data) {

        try {
            const query = `SELECT * FROM user where ${data[0]}`

            const [results] = await this.con.promise().query(query, data[1]);

            return results[0]
        } catch (error) {
            console.error(error.message);
            throw new Error("Error en AUTH MODEL: " + error.message);
        }
    }

    async register(data) {
        try {
            const queryUser = "INSERT INTO user(name_user, pwd_user, avatar_url, entity_fk, job_user, department_user, status_user, created_at, updated_at) values(?, ?, ?, ?, ?, ?, 1, now(), now())";

            const [resultsUser] = await this.con.promise().query(queryUser, [            data.name_user,
                data.pwd_user,
                data.avatar_url,
                data.entity_fk,
                data.job_user,
                data.department_user]);

            return {
                lastId: resultsUser.insertId,
                results: resultsUser.affectedRows,
                info: resultsUser.message
            }

        } catch (error) {
            console.error(error.message);
            throw new Error("Error en AUTH MODEL: " + error.message);
        }

    }
}

export default Auth