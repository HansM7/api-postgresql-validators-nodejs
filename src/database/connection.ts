import { Pool } from "pg";
import "dotenv/config";

export const pool = new Pool({
  user: process.env.database_user,
  host: process.env.database_host,
  database: process.env.database_name,
  password: process.env.database_password,
  port: 5432,
});
