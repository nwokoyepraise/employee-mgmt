import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { EmployeeDto as EmployeeDto, QueryParams, SearchParams } from './dto/Employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor (private readonly employeeService : EmployeeService) {}

    @Post()
    async add(@Body() employeeDto : EmployeeDto) {
        return await this.employeeService.add(employeeDto);
    }

    @Patch(":id")
    async update(@Param() searchParams: SearchParams, @Body() updateDto: EmployeeDto) {
        return await this.employeeService.update(searchParams.id, updateDto);
    }

    @Get('')
    async retrieve (@Query() queryParams: QueryParams) {
        return await this.employeeService.retrieve(queryParams.createdBefore);
    }

    @Delete(':id')
    async softDelete(@Param() searchParams: SearchParams) {
        return await this.employeeService.softDelete(searchParams.id);
    }

    @Post(':id/restore')
    async restoreSoftDelete (@Param() searchParams: SearchParams) {
        return await this.employeeService.restoreSoftDelete(searchParams.id);
    }

    @Get('/deleted')
    async retrieveSoftDeleted (@Query() queryParams: QueryParams) {
        return await this.employeeService.retrieveSoftDeleted(queryParams.createdBefore);
    }

}
