import Employee from "../models/employees.js";

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEmployeeById = async (req, res) => {
    const {id} = req.params;
    try {
      const employee = await Employee.findById(id);
      
      res.status(200).json(employee);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
export const createEmployee = async (req, res) => {
  const employee = new Employee(req.body);

  try {
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  } else {
    try {
      await employee.deleteOne();
      res.status(200).json({ message: "Employee deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  } else {
    try {
      await employee.updateOne(req.body);
      res.status(200).json({ message: "Employee updated successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
