import { QueryResult } from "pg";
import { pool } from "../database/connection";
import { userEditDTO } from "../models/dto/edit-user.dto";
import { userCreateDTO } from "../models/dto/create-user.dto";

class UserQuery {
  private readonly table = "users";

  async selectUsers(): Promise<QueryResult[]> {
    const query = `select*from ${this.table}`;
    const result = await pool.query(query);
    return result.rows;
  }

  async selectUser(id: string): Promise<QueryResult> {
    const query = `select*from ${this.table} where id = $1;`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  async createUser(data: userCreateDTO): Promise<void> {
    const query = `insert into ${this.table}(name, email, age) values ($1, $2, $3);`;
    await pool.query(query, [data.name, data.email, data.age]);
  }

  async updateUser(data: userEditDTO, id: string): Promise<void> {
    const fields = Object.keys(data)
      .map((key, index) => `${key} = $${index + 1}`)
      .join(", ");
    const values = Object.values(data);

    const query = `update ${this.table} set ${fields} where id = ${id};`;

    await pool.query(query, values);
  }

  async deleteUser(id: string): Promise<void> {
    const query = `delete from ${this.table} where id = $1;`;
    await pool.query(query, [id]);
  }
}

export const userQuery = new UserQuery();
