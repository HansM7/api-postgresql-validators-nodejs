import { QueryResult } from "pg";
import { pool } from "../database/connection";
import { taskCreateDTO } from "../models/dto/create-task.dto";

class TaskQuery {
  private readonly table = "tasks";
  private readonly table_user = "users";

  async selectTasks(): Promise<QueryResult[]> {
    const query = `select * from select_tasks()`;
    const result = await pool.query(query);
    return result.rows;
  }

  async selectTask(id: string): Promise<QueryResult> {
    // const query = `
    // select
    // ${this.table}.id as id, ${this.table}.user_id as user_id, ${this.table}.title, ${this.table}.description,
    // ${this.table}.status, ${this.table}.created, ${this.table}.edited
    // from ${this.table} inner join ${this.table_user}
    // on ${this.table}.user_id = ${this.table_user}.id
    // where ${this.table}.user_id = $1
    // `;
    const query = `select * from select_task_by_id($1::int)`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  async createTask(data: taskCreateDTO) {
    const query = `insert into ${this.table} (user_id, title, description) values($1, $2, $3)`;
    await pool.query(query, [data.user_id, data.title, data.description]);
  }

  async updateTask(data: taskCreateDTO, id: string) {
    const fields = Object.keys(data)
      .map((key, index) => `${key} = $${index + 1}`)
      .join(", ");
    const values = Object.values(data);

    const query = `update ${this.table} set ${fields} where id = ${id};`;

    await pool.query(query, values);
  }

  async deleteTask(id: string) {
    const query = `delete from ${this.table} where id=$1`;
    await pool.query(query, [id]);
  }
}

export const taskQuery = new TaskQuery();
