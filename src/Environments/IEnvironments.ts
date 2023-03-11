interface IObjectKeys {
  [key: string]: string | number;
}

export interface IEnvironment extends IObjectKeys {
  PORT: number;
  JWT_KEYWORD: string;
  NODE_ENV: string;
  DB_TYPE: any;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  DB_PORT: number;
  DB_HOST: string;
}
