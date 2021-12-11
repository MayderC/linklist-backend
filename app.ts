import Server from "./src/server/server";
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.PORT, "PORT")

const server = new Server()
server.start()