import express from "express";
import morgan from "morgan";
//espacio
import languageRoutes from "./routes/language.routes";

//const cnx = require("./cnx")
const app=express();

//Settings
app.set("port", 4000);

//Middlewares

app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/languages", languageRoutes);

export default app