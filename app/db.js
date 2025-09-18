import { Pool } from "pg"

const pool = new Pool({
    user: "postgres",
    password: "pass",
    host: "localhost",
    port: 5432,
    database: "loldb"
});

export default pool;