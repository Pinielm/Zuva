const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });

const express = require("express");
const cors = require("cors");

const app = express();

const port = 3006;

// const expressWs = require("express-ws")(app);

// middleware
app.use(cors());
app.use(express.json());

// routers
const EmployeesRouter = require("./routes/employeeRouter.js");
app.use("/employees", EmployeesRouter);

const attendancesRouter = require("./routes/attendanceRouter.js");
app.use("/attendances", attendancesRouter);

// app.ws("/", function (ws, req) {
//   ws.on("message", function (msg) {
//     console.log(msg);
//   });
// });

app.listen(port, () => {
  console.log(`Server running on  port ${port}`);
});
