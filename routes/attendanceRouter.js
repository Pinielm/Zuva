const attendanceController = require("../controllers/attendanceController.js");

const router = require("express").Router();

router.get(
  "/getAttendancesByEmployeeId/:id",
  attendanceController.getAttendancesByEmployeeId
);

router.get("/dailyAttendance", attendanceController.getDailyAttendance);

router.get("/allAttendances", attendanceController.getAllAttendances);

router.post("/checkIn", attendanceController.checkIn);
router.post("/checkOut", attendanceController.checkOut);

module.exports = router;
