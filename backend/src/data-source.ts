import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Exercise } from "./entities/Exercise";
import { Progression } from "./entities/Progression";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "test",
  password: process.env.DB_PASSWORD || "test",
  database: process.env.DB_DATABASE || "test",
  synchronize: process.env.NODE_ENV === "development", // true only in development
  logging: process.env.NODE_ENV === "development" ? true : false,
  entities: [User, Exercise, Progression],
  migrations: [],
  subscribers: [],
});
