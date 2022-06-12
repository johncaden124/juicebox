// // main index file, currently being run by nodemon

const { client } = require('./db');

async function getPets() {
    const result = await client.query(`
    SELECT *
    FROM pets;
    `)

    console.log(result)
}

// async function getOwners() {
//     const result = await client.query(`
//     SELECT *
//     FROM owners;
//     `)

//     console.log(result)
// }

getPets();
// getOwners();