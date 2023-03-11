import Server from "./Infrastructure/web-service/server/server";
import { DependencyContainer } from "./Container/DependencyContainer";
const dependency = new DependencyContainer();
const server: Server = dependency.container.resolve("server");
server.start();
