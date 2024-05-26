const db = require("../models");

const Employee = db.Employees;

// add Employees
const addEmployee = async (req, res) => {
  const employee = {
    name: req.body.name,
    position: req.body.position,
    site: req.body.site,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
  };
  await Employee.create(employee);
  res.status(200).send(employee);
};

// get all Employees
const getAllEmployees = async (req, res) => {
  let employees = await Employee.findAll({});
  res.status(200).send(employees);
};

const getEmployeeById = async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.findOne({ where: { id: id } });
  res.status(200).send(employee);
};

const getEmployeeBySite = async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.findAll({ where: { site: site } });
  res.status(200).send(employee);
};

module.exports = {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  getEmployeeBySite,
};
