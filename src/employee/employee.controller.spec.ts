import { InjectModel } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { employee, restoredEmployee, softDeletedEmployee, updatedEmployee } from './constants/employee.constant';
import { EmployeeDto } from './dto/Employee.dto';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

const employeeServiceProvider = {
  provide: EmployeeService,
  useFactory: () => ({
    add: jest.fn((employeeData: EmployeeDto) => employee),
    update: jest.fn((updatedData: EmployeeDto) => updatedEmployee),
    softDelete: jest.fn((id: string) => updatedEmployee),
    retrieve: jest.fn(() => [employee]),
    retrieveSoftDeleted: jest.fn(()=> [softDeletedEmployee]),
    restoreSoftDelete: jest.fn(() => restoredEmployee)
  }),
};

describe('EmployeeController', () => {
  let employeeController: EmployeeController;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [employeeServiceProvider],
    }).compile();

    employeeController = module.get<EmployeeController>(EmployeeController);
    employeeService = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(employeeController).toBeDefined();
  });

  it('should be able to add employee', async () => {
    let result = await employeeController.add(employee);
    expect(result).not.toBeNull();
    expect(result).toEqual(employee);
  });

  it('should be able to update employee', async () => {
    let result = await employeeController.update(
      { id: '62873cf37262322c0744ccb1' },
      updatedEmployee,
    );
    expect(result).toEqual(updatedEmployee);
  });

  it('should be able to delete employee', async () => {
    let result = await employeeController.softDelete({
      id: '62873cf37262322c0744ccb1',
    });
    expect(result).toEqual(updatedEmployee);
  });

  it('should be able to retrieve employees', async () => {
    let result = await employeeController.retrieve();
    expect(result).toContain(employee);
  });

  it ('should be able to retrieve soft-deleted employees', async () => {
    let result = await employeeController.retrieveSoftDeleted();
    expect(result).toContain(softDeletedEmployee);
  })
  it ('should be able to restore soft-deleted employee', async () => {
    let result = await employeeController.restoreSoftDelete({ id: '62873cf37262322c0744ccb1',});
    expect (result).toBe(restoredEmployee);
  })
});
