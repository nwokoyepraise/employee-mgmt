import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EmployeeDto } from "./dto/Employee.dto";
import { Employee, EmployeeDocument } from "./schemas/employee.schema";

@Injectable()
export class EmployeeRepository {
    constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>){}
    
    async add(employeeDto: EmployeeDto): Promise<Employee> {
        return await this.employeeModel.create(employeeDto);
    }

    async update(id: string, employeeDto: EmployeeDto) : Promise<Employee> {  
        return await this.employeeModel.findByIdAndUpdate(id, employeeDto, {new: true, lean: true}).exec()
    }
    
}