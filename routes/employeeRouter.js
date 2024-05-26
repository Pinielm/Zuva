const employeeController = require("../controllers/employeeController.js");

const router = require("express").Router();

router.get("/allEmployees", employeeController.getAllEmployees);

router.post("/addEmployee", employeeController.addEmployee);
router.get("/getEmployeeById/:id", employeeController.getEmployeeById);
router.get("/getEmployeeBySite/:site", employeeController.getEmployeeBySite);

module.exports = router;
