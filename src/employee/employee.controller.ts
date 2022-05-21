import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeeDto as EmployeeDto, QueryParams, SearchParams } from './dto/Employee.dto';
import { EmployeeService } from './employee.service';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
    constructor (private readonly employeeService : EmployeeService) {}

    //endpoint to add/create employee
    @Post()
    async add(@Body() employeeDto : EmployeeDto) {
        return await this.employeeService.add(employeeDto);
    }

    //endpoint to update employee using employee id
    @Patch(":id")
    async update(@Param() searchParams: SearchParams, @Body() updateDto: EmployeeDto) {
        return await this.employeeService.update(searchParams.id, updateDto);
    }

    //endpoint to retrieve all employees (not soft-deleted)
    @Get('')
    async retrieve (@Query() queryParams?: QueryParams) {
        return await this.employeeService.retrieve(queryParams?.createdBefore);
    }

    //endpoint to delete employee by id
    @Delete(':id')
    async softDelete(@Param() searchParams: SearchParams) {
        return await this.employeeService.softDelete(searchParams.id);
    }

    //endooint to restore soft-deleted employee
    @Post(':id/restore')
    async restoreSoftDelete (@Param() searchParams?: SearchParams) {
        return await this.employeeService.restoreSoftDelete(searchParams.id);
    }

    //endpoint to retrieve soft-deleted employee
    @Get('/deleted')
    async retrieveSoftDeleted (@Query() queryParams?: QueryParams) {
        return await this.employeeService.retrieveSoftDeleted(queryParams?.createdBefore);
    }

}
