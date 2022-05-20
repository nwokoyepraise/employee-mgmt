import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { EmployeeRepository } from './employee.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: Employee.name, schema: EmployeeSchema}])],
  providers: [EmployeeService, EmployeeRepository],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
