import { Test, TestingModule } from '@nestjs/testing';
import { employee, softDeletedEmployee, updatedEmployee } from './constants/employee.constant';
import { EmployeeDto } from './dto/Employee.dto';
import { EmployeeRepository } from './employee.repository';
import { EmployeeService } from './employee.service';

const mockEmployeeRepository = {
  add: jest.fn((addEmployeeDto: EmployeeDto) => employee),
  update: jest.fn(
    (id: string, updateEmployeeDto: EmployeeDto) => updatedEmployee,
  ),
  softDelete: jest.fn((id: string) => updatedEmployee),
  retrieve: jest.fn(()=> [employee]),
  retrieveSoftDeleted: jest.fn(()=> [softDeletedEmployee])
};

describe('EmployeeService', () => {
  let employeeService: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeService,
        { provide: EmployeeRepository, useValue: mockEmployeeRepository },
      ],
    }).compile();

    employeeService = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(employeeService).toBeDefined();
  });

  it('should be able to add employee', async () => {
    let result = await employeeService.add(employee);
    expect(result).toEqual(employee);
  });

  it('should be able to update employee', async () => {
    let result = await employeeService.update(
      '62873cf37262322c0744ccb1',
      updatedEmployee,
    );
    expect(result).toEqual(updatedEmployee);
  });

  it('should be able to delete employee', async () => {
    let result = await employeeService.softDelete('62873cf37262322c0744ccb1');
    expect(result).toEqual(updatedEmployee);
  });

  it('should be able to retrieve employees', async () => {
    let result = await employeeService.retrieve();
    expect(result).toContain(employee);
  });

  it ('should be able to retrieve soft-deleted employees', async () => {
    let result = await employeeService.retrieveSoftDeleted();
    expect(result).toContain(softDeletedEmployee);
  })
});
