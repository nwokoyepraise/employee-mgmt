import { Test, TestingModule } from '@nestjs/testing';
import {
  employee,
  updatedEmployee,
  softDeletedEmployee,
  restoredEmployee,
} from './constants/employee.constant';
import { EmployeeDto } from './dto/Employee.dto';
import { EmployeeRepository } from './employee.repository';

//describe mock employee repository provider
const employeeRepositoryProvider = {
  provide: EmployeeRepository,
  useFactory: () => ({
    add: jest.fn((employeeData: EmployeeDto) => employee),
    update: jest.fn((updatedData: EmployeeDto) => updatedEmployee),
    softDelete: jest.fn((id: string) => updatedEmployee),
    retrieve: jest.fn(() => [employee]),
    retrieveSoftDeleted: jest.fn(() => [softDeletedEmployee]),
    restoreSoftDelete: jest.fn(() => restoredEmployee),
  }),
};

//describe mock employee model provider
const employeeModelProvider = {
  provide: 'EmployeeModel',
  useFactory: () => ({
    create: jest.fn((employeeData: EmployeeDto) => employee),
    findByIdAndDelete: jest.fn((updatedData: EmployeeDto) => updatedEmployee),
    softDelete: jest.fn((id: string) => updatedEmployee),
    retrieve: jest.fn(() => [employee]),
    retrieveSoftDeleted: jest.fn(() => [softDeletedEmployee]),
    restoreSoftDelete: jest.fn(() => restoredEmployee),
  }),
};

describe('EmployeeRepository', () => {
  let employeeRepository: EmployeeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        employeeRepositoryProvider,
        employeeModelProvider
        // { provide: 'EmployeeModel', useValue: '' },
      ],
    }).compile();

    employeeRepository = module.get<EmployeeRepository>(EmployeeRepository);
  });

  it('should be defined', () => {
    expect(employeeRepository).toBeDefined();
  });

  it('should be able to add employee', async () => {
    let result = await employeeRepository.add(employee);
    expect(result).toEqual(employee);
  });

  it('should be able to update employee', async () => {
    let result = await employeeRepository.update(
      '62873cf37262322c0744ccb1',
      updatedEmployee,
    );
    expect(result).toEqual(updatedEmployee);
  });

  it('should be able to delete employee', async () => {
    let result = await employeeRepository.softDelete(
      '62873cf37262322c0744ccb1',
    );
    expect(result).toEqual(updatedEmployee);
  });

  it('should be able to retrieve employees', async () => {
    let result = await employeeRepository.retrieve();
    expect(result).toContain(employee);
  });

  it('should be able to retrieve soft-deleted employees', async () => {
    let result = await employeeRepository.retrieveSoftDeleted();
    expect(result).toContain(softDeletedEmployee);
  });

  it('should be able to restore soft-deleted employee', async () => {
    let result = await employeeRepository.restoreSoftDelete(
      '62873cf37262322c0744ccb1',
    );
    expect(result).toBe(restoredEmployee);
  });
});
