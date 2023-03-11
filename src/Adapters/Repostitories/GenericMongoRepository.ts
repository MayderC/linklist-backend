import { IGenericRepository } from "../../Application/Ports/Repositories/IGenericRepository";

export class GenericMongoRepository<T> implements IGenericRepository<T> {
  get(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  save(data: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(data: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
