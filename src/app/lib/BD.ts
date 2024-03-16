import pg, { ResultBuilder, DatabaseError, QueryResultRow } from "pg";
import { LogAnswer, Container, ConfigDB } from './types';

const PSQL_HOST = process.env.PSQL_HOST;
const PSQL_PORT = process.env.PSQL_PORT;
const PSQL_DB = process.env.PSQL_DB;
const PSQL_USER = process.env.PSQL_USER;
const PSQL_PASSWORD = process.env.PSQL_PASSWORD;

const CONFIG_DB = {
  user: PSQL_USER,
  password: PSQL_PASSWORD,
  database: PSQL_DB,
  host: PSQL_HOST
};
const { Client: ClientRDS } = pg;

export class DB {
  private config: ConfigDB;

  constructor() {
    this.config = CONFIG_DB;
  }

  private async query(q: string, values: any[]): Promise<QueryResultRow | undefined> {
    const client = new ClientRDS(this.config);
    let error: string = "", res = {};
    try {
      await client.connect();
      return await client.query(q, values);
    } catch (e: DatabaseError | any) {
      error = "Error SQL query: " + e.valueOf();
    } finally {
      await client.end();
    }
    if (error) throw new Error(error);
  };

  public async getContainer(alias: string): Promise<Container | undefined> {
    const q = `
      SELECT *
      FROM containers c
      LEFT JOIN containers_items ci ON c.alias = ci.container_alias
      WHERE alias = $1 LIMIT 1;`;
    try {
      const res: QueryResultRow | undefined = await this.query(q, [alias]);
      return res?.rows;
    } catch (e) {
      throw e;
    }
  }

  public async getContainersByCategory(category: string): Promise<Container[] | undefined> {
    const q = `
      SELECT *
      FROM containers c
      LEFT JOIN containers_items ci ON c.alias = ci.container_alias
      WHERE category = $1 and active is TRUE;`;
    try {
      const res: QueryResultRow | undefined = await this.query(q, [category]);
      return res?.rows;
    } catch (e) {
      throw e;
    }
  }


  // public async getScenario(group_by: string, action: string): Promise<Scena[] | undefined> {
  //   const q = `SELECT * FROM scenarios WHERE group_by = $1 AND action = $2 ORDER BY step ASC;`;
  //   try {
  //     const res: QueryResultRow | undefined = await this.query(q, [group_by]);
  //     return res?.rows;
  //   } catch (e) {
  //     throw e;
  //   }
  // }

  // public async getScenariosList(): Promise<string[] | undefined> {
  //   const q = `SELECT group_by FROM scenarios GROUP BY group_by ORDER BY group_by ASC;`;
  //   try {
  //     const res: QueryResultRow | undefined = await this.query(q, []);
  //     return res?.rows;
  //   } catch (e) {
  //     throw e;
  //   }
  // }

  // public async getScenesByAction(group_by: string, action: string): Promise<Scena[] | undefined> {
  //   const q = `SELECT * FROM scenarios WHERE group_by = $1 AND action = $2 ORDER BY step ASC;`;
  //   try {
  //     const res: QueryResultRow | undefined = await this.query(q, [group_by, action]);
  //     const scena = res?.rows as Scena[];
  //     return scena;
  //   } catch (e) {
  //     throw e;
  //   }
  // }

  // public async insertLogAnswer(data: LogAnswer): Promise<boolean> {
  //   const q = `INSERT INTO log_answers (scenarios_id, scenarios_group_by, prompt, answer, group_by_uuid) VALUES ($1, $2, $3, $4, $5) `;
  //   try {
  //     const res = await this.query(q, [
  //       data.scenarios_id, data.scenarios_group_by, data.prompt, data.answer, data.group_by_uuid
  //     ]);
  //     console.log("(DB) action:", res?.command, " count:", res?.rowCount,);
  //     return true;
  //   } catch (e) {
  //     console.error(e)
  //     // throw e;
  //     return false
  //   }
  // }

}





