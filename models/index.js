const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: true,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging: console.log, // Enable logging to console
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Employees = require("./employeeModel.js")(sequelize, DataTypes);
db.Attendance = require("./attendanceModel.js")(sequelize, DataTypes);

db.Attendance.belongsTo(db.Employees, {
  foreignKey: {
    name: "EmployeeId",
    allowNull: false,
  },
});
db.Employees.hasMany(db.Attendance, {
  foreignKey: "EmployeeId",
  onDelete: "cascade",
});
db.sequelize.sync({ force: false }).then(() => {
  console.log("yes resync done");
});

module.exports = db;
