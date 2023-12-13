const {Pool} = require('pg');



      const pool = new Pool({
      host: 'Localhost',
      port: 5430,
      user: 'elbalcon',
      password: 'limonagrio123',
      database: 'db_elbalcon'

      })

  module.exports = pool;
