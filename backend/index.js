import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.configDotenv();
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

import AuthRoutes from "./routes/Auth.js";

app.use('/auth', AuthRoutes.router);

app.listen(process.env.SV_PORT || 3000, async () => {
    console.log(`Server corriendo en ${process.env.SV_PORT}`);
})