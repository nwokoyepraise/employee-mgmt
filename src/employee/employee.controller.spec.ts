import { InjectModel } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { employee, updatedEmployee } from './constants/employee.constant';
import { EmployeeDto } from './dto/Employee.dto';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Employee } from './schemas/employee.schema';



const employeeServiceProvider = {
  provide: EmployeeService,
  useFactory: () => ({
    add: jest.fn((employeeData: EmployeeDto) => employee),
    update: jest.fn((updatedData: EmployeeDto) => updatedEmployee),
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
    // let result = await employeeController.delete(
    //   { id: '62873cf37262322c0744ccb1' }
    // );
    // expect(result).toEqual(updatedEmployee);
  });
});
