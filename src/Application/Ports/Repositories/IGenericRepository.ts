export interface IGenericRepository<T> {
  save(data: T): Promise<T>;
  delete(id: string): Promise<void>;
  update(data: T): Promise<T>;
  get(id: string): Promise<T>;
}
