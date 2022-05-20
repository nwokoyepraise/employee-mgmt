import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeDto } from './dto/Employee.dto';
import { EmployeeRepository } from './employee.repository';
import { Employee, EmployeeDocument } from './schemas/employee.schema';

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

  async retrieve(): Promise<Employee[]> {
      return await this.employeeRepository.retrieve();
  }
}
