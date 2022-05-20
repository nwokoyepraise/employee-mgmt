import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { IsMongoId } from 'class-validator';
import { EmployeeDto as EmployeeDto, SearchParams } from './dto/Employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor (private readonly employeeService : EmployeeService) {}

    @Post()
    async add(@Body() employeeDto : EmployeeDto) {
        return await this.employeeService.add(employeeDto);
    }

    @Put(":id")
    async update(@Param() searchParams: SearchParams, @Body() updateDto: EmployeeDto) {
        return await this.employeeService.update(searchParams.id, updateDto);
    }

}
