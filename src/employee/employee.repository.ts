import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { throws } from 'assert';
import { Model } from 'mongoose';
import { EmployeeDto } from './dto/Employee.dto';
import { SoftDeleteModel } from './plugins/softDelete.model';
import { Employee, EmployeeDocument } from './schemas/employee.schema';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectModel(Employee.name)
    private employeeModel: SoftDeleteModel<EmployeeDocument>,
  ) {}

  async add(employeeDto: EmployeeDto): Promise<Employee> {
    return await this.employeeModel.create(employeeDto);
  }

  async update(id: string, employeeDto: EmployeeDto): Promise<Employee> {
    return await this.employeeModel
      .findByIdAndUpdate(id, employeeDto, { new: true, lean: true })
      .exec();
  }

  async softDelete(id: string): Promise<Employee> {
    return await this.employeeModel.softDeleteById(id);
  }

  async restoreSoftDelete(id: string): Promise<Employee> {
    return await this.employeeModel.restoreSoftDeletedById(id);
  }

  async retrieve(createdBefore?: Date): Promise<Employee[]> {
    return await this.employeeModel.find({createdAt: {$lt: createdBefore}}).limit(10).sort({ createdAt: "desc" }).exec();
  }
}
