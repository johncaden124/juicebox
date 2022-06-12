const pg = require('pg');

const client = new pg.Client(
    "postgress://localhost:5432/petpals"
);

client.connect();
// console.log(client)
module.exports = {
    client
};