import express from "express";

class Server {
  private app: express.Application;
  private port: string;
  constructor() {
    // Asi se inicializa la variable "app"
    this.app = express();
    // Si no encuentra en las variables de entorno la variable de entorno le asigna por defecto el puerto "3002"
    this.port = process.env.PORT || "3002";
    // Acá puedo llamar los métodos que cree
    this.listen();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`La aplicación esta corriendo en el puerto ${this.port}`);
    });
  }
}

export default Server;
