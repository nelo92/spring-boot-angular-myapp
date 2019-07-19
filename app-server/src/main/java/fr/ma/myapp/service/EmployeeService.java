package fr.ma.myapp.service;

import fr.ma.myapp.entity.Employee;
import fr.ma.myapp.exception.ResourceNotFoundException;

import java.util.List;

public interface EmployeeService {

 public List<Employee> getAllEmployees();
 
 public Employee getEmployeeById(Long employeeId)  throws ResourceNotFoundException;
 
 public Employee createEmployee(Employee employee);

 public void updateEmployee(Employee employee);
 
 public void deleteEmployee(Employee employee);

}
