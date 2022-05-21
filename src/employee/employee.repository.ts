import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeDto } from './dto/Employee.dto';
import { SoftDeleteModel } from './plugins/softDelete.model';
import { Employee, EmployeeDocument } from './schemas/employee.schema';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectModel(Employee.name)
    private employeeModel: SoftDeleteModel<EmployeeDocument>,
  ) {}

  //add employee document to db
  async add(employeeDto: EmployeeDto): Promise<Employee> {
    return await this.employeeModel.create(employeeDto);
  }

  //update employee document
  async update(id: string, employeeDto: EmployeeDto): Promise<Employee> {
    return await this.employeeModel
      .findByIdAndUpdate(id, employeeDto, { new: true, lean: true })
      .exec();
  }

  //soft-delete employee using employee id
  async softDelete(id: string): Promise<Employee> {
    return await this.employeeModel.softDeleteById(id);
  }

  //restore soft-deleted employee
  async restoreSoftDelete(id: string): Promise<Employee> {
    return await this.employeeModel.restoreSoftDeletedById(id);
  }

  //retrieve all employees with pagination using createdAt timestamp value limited by 10
  async retrieve(createdBefore?: Date): Promise<Employee[]> {
    return await this.employeeModel.find({createdAt: {$lt: createdBefore || new Date()}}).limit(10).sort({ createdAt: "desc" }).exec();
  }

  //retrieve all soft-deleted employees using pagination 
  async retrieveSoftDeleted(createdBefore?: Date): Promise<Employee[]> {
    return await this.employeeModel.findAllSoftDeleted({createdAt: {$lt: createdBefore || new Date ()}});
  }
}
