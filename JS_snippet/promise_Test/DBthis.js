const db = require("promise-mysql");

async function main() {
    const pool = await db.createPool({
        "host": "localhost",
        "user": "user",
        "password": "eotlqhem",
        "database": "api_db",
        "multipleStatements": true,
    });
    const result = await pool.query("select pj_id from project limit 1");

    console.log(result);
}

main().catch(console.log);

