module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "employee",

  dialect: "mysql",

  // Connection pools help reduce the time spent connecting to the MySQL
  //server by reusing a previous connection.
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
