const {Client} = require('pg');


async function getConnection()
  {
      const client = new Client({
      host: 'Localhost',
      port: 5430,
      user: 'elbalcon',
      password: 'limonagrio123',
      database: 'db_elbalcon'

      })


      await client.connect();
      return client;
  }

  module.exports = getConnection;
