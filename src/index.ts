// Configurar las variables de entorno
import dotenv from "dotenv";
import Server from "./models/server";

dotenv.config();
const server = new Server();
