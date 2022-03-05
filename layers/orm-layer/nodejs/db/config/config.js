module.exports = {
  [process.env.BRANCH_NAME]: {
    username: process.env.username,
    password: process.env.password,
    port: process.env.port,
    // host: process.env.host,
    // host: 'localhost',
    host: 'tali-db-dev.cobq5f3c8nxj.us-east-1.rds.amazonaws.com',
    dialect: process.env.engine
  },
  local: {
    username: 'postgres',
    password: 'password12345',
    database: 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
}