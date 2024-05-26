const db = require("../models");

const Attendance = db.Attendance;

// add Devices
const checkIn = async (req, res) => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const currentTime = new Date().toLocaleTimeString("it-IT");

  const attendanceRecord = {
    date: currentDate,
    timeIn: currentTime,
    timeOut: "Still In",

    EmployeeId: req.body.EmployeeId,
  };
  await Attendance.create(attendanceRecord);
  res.status(200).send(attendanceRecord);
};

const checkOut = async (req, res) => {
  const attendanceId = req.body.EmployeeId;

  const currentTime = new Date().toLocaleTimeString("it-IT");

  const attendanceRecord = await Attendance.update(
    { timeOut: currentTime },

    {
      where: {
        EmployeeId: attendanceId,
        timeOut: "Still In",
      },
    }
  );
  res.status(200).send(attendanceRecordW);
};

const getDailyAttendance = async (req, res) => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  let attendanceRecords = await Attendance.findAll({
    where: { date: currentDate },
  });
  res.status(200).send(attendanceRecords);
};

// get all Attendances
const getAllAttendances = async (req, res) => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  let attendanceRecords = await Attendance.findAll({});
  res.status(200).send(attendanceRecords);
};

const getAttendancesByEmployeeId = async (req, res) => {
  const employeeId = req.params.id;
  console.log("emplo:", employeeId);
  let attendanceRecord = await Attendance.findAll({
    where: { EmployeeId: employeeId },
  });
  res.status(200).send(attendanceRecord);
};

module.exports = {
  checkIn,
  checkOut,
  getAllAttendances,
  getAttendancesByEmployeeId,
  getDailyAttendance,
};
