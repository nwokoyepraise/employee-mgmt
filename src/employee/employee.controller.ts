import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { EmployeeDto as EmployeeDto } from './dto/Employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor (private readonly employeeService : EmployeeService) {}

    @Post()
    async add(@Body() employeeDto : EmployeeDto) {
        return await this.employeeService.add(employeeDto);
    }

    @Put(":id")
    async update(@Param('id') id: string, @Body() updateDto: EmployeeDto) {
        return await this.employeeService.update(id, updateDto);
    }

}
