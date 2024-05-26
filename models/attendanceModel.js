module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define("Attendance", {
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timeIn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timeOut: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Attendance;
};
