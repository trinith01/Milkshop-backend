import { Router } from "express";
import { getEmployees, getEmployeeById, updateEmployee, deleteEmployee, createEmployee } from "../controllers/employees.js";

const employeeRouter = Router();

// Routes for all employees
employeeRouter.get("/", getEmployees).post("/", createEmployee);

// Routes for a specific employee by ID
employeeRouter.route("/:id")
  .get(getEmployeeById)
  .put(updateEmployee)
  .delete(deleteEmployee);

export default employeeRouter;


