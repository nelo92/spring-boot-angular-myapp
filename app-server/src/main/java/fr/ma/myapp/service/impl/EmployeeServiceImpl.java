package fr.ma.myapp.service.impl;

import fr.ma.myapp.entity.Employee;
import fr.ma.myapp.exception.ResourceNotFoundException;
import fr.ma.myapp.repository.EmployeeRepository;
import fr.ma.myapp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long employeeId) throws ResourceNotFoundException {
        return employeeRepository.findById(employeeId).
                orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void updateEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

    public void deleteEmployee(Employee employee) {
        employeeRepository.delete(employee);
    }

}
