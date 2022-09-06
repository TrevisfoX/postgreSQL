const Pool = require("pg").Pool;
const pool = new Pool({
	user: "postgres",
	password: "vk4194301",
	host: "localhost",
	port: 5432,
	database: "node_postgres",
});

module.exports = pool;
