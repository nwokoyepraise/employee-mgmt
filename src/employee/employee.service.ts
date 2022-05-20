import { Injectable } from '@nestjs/common';
import { EmployeeDto } from './dto/Employee.dto';
import { EmployeeRepository } from './employee.repository';
import { Employee} from './schemas/employee.schema';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async add(employeeDto: EmployeeDto): Promise<Employee> {
    return await this.employeeRepository.add(employeeDto);
  }

  async update(id: string, employeeDto: EmployeeDto): Promise<Employee> {
    return await this.employeeRepository.update(id, employeeDto);
  }

  async softDelete(id: string): Promise<Employee> {
    return await this.employeeRepository.softDelete(id);
  }

  async restoreSoftDelete(id: string) : Promise<Employee> {
      return await this.employeeRepository.restoreSoftDelete(id);
  }

  async retrieve(createdBefore? : Date): Promise<Employee[]> {
      return await this.employeeRepository.retrieve(createdBefore);
  }

  async retrieveSoftDeleted(createdBefore? : Date): Promise<Employee[]> {
    return await this.employeeRepository.retrieveSoftDeleted(createdBefore);
}
}
