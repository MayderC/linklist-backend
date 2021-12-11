import cors from 'cors';
import express from 'express';

import conection from '../database/database';
import auth from '../routes/auth.routes';
import link from '../routes/links.routes';


class Server {

  private port: number | string;
  private app: express.Application;

  constructor() {
    this.port = process.env.PORT || 3000
    this.app = express()

    this.conexion()
    this.middlewares()
    this.routes() 
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  conexion(){
    conection()
  }

  routes() {
    this.app.use('/api/auth', auth.router)
    this.app.use('/api/link', link.router)
  }


  start() { this.app.listen(this.port, () => console.log(`listen on ${this.port}`)) }

}


export default Server;