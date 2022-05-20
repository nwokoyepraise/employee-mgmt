import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddEmployeeDto } from './dto/addEmployee.dto';
import { Employee, EmployeeDocument } from './schemas/employee.schema';

@Injectable()
export class EmployeeService {
    constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>){}

    async add(addEmployeeDto: AddEmployeeDto): Promise<Employee> {
        const addedEmployee = new this.employeeModel(addEmployeeDto);
        return addedEmployee.save();
    }
}
