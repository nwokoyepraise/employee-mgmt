import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeDto } from './dto/Employee.dto';
import { Employee, EmployeeDocument } from './schemas/employee.schema';

@Injectable()
export class EmployeeService {
    constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>){}

    async add(employeeDto: EmployeeDto): Promise<Employee> {
        const employee = new this.employeeModel(employeeDto);
        return employee.save();
    }

    async update (id: string, employeeDto: EmployeeDto) : Promise<Employee> {  
        return this.employeeModel.findByIdAndUpdate(id, employeeDto, {new: true, lean: true}).exec()
    }
}
