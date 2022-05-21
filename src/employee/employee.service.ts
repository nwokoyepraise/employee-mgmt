import { Injectable } from '@nestjs/common';
import { EmployeeDto } from './dto/Employee.dto';
import { EmployeeRepository } from './employee.repository';
import { Employee} from './schemas/employee.schema';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  //service to add employee to db
  async add(employeeDto: EmployeeDto): Promise<Employee> {
    return await this.employeeRepository.add(employeeDto);
  }

  //service to update employee using employee id
  async update(id: string, employeeDto: EmployeeDto): Promise<Employee> {
    return await this.employeeRepository.update(id, employeeDto);
  }

  //service to soft-delete employee
  async softDelete(id: string): Promise<Employee> {
    return await this.employeeRepository.softDelete(id);
  }

  //service to restore soft-deleted employee
  async restoreSoftDelete(id: string) : Promise<Employee> {
      return await this.employeeRepository.restoreSoftDelete(id);
  }

  //service to retrieve all employees (not soft-deleted)
  async retrieve(createdBefore? : Date): Promise<Employee[]> {
      return await this.employeeRepository.retrieve(createdBefore);
  }

  //service to retrieve soft-deleted employees
  async retrieveSoftDeleted(createdBefore? : Date): Promise<Employee[]> {
    return await this.employeeRepository.retrieveSoftDeleted(createdBefore);
}
}
