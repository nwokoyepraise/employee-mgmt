import { Body, Controller, Post } from '@nestjs/common';
import { AddEmployeeDto } from './dto/addEmployee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor (private readonly employeeService : EmployeeService) {}

    @Post()
    async add(@Body() addEmployeeDto : AddEmployeeDto) {
        return await this.employeeService.add(addEmployeeDto);
    }

}
