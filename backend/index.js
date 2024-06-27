import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.configDotenv();
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());


import Connection from "./config/database.js";

app.listen(process.env.SV_PORT || 3000, async () => {
    console.log(`Server corriendo en ${process.env.SV_PORT}`);
    const con = new Connection();
    const db = await con.createCon();

    if(db){
        console.log(`Conectado a la BD: ${db.config.database}`);
    } else{
        console.log("Error al conectar a la base de datos");
    }
})