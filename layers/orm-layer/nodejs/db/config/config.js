module.exports = {
  [process.env.BRANCH_NAME]: {
    username: process.env.username,
    password: process.env.password,
    port: process.env.port,
    // host: process.env.host,
    host: 'localhost',
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