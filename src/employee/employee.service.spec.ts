import { Test, TestingModule } from '@nestjs/testing';
import { AddEmployeeDto } from './dto/addEmployee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './schemas/employee.schema';

const employee: Employee = {
  name: 'name',
  email: 'email@email.com',
  phone: '+2344444444',
  homeAddress: {
    city: 'city',
    zipCode: 1234,
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
  },
  dob: new Date('1950-01-01'),
  doe: new Date('2002-12-09'),
};

function mockEmployeeModel(addEmployeeDto: AddEmployeeDto) {
  this.save = () => {
    return addEmployeeDto;
  };
}

describe('EmployeeService', () => {
  let employeeService: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeService,
        { provide: 'EmployeeModel', useValue: mockEmployeeModel },
      ],
    }).compile();

    employeeService = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(employeeService).toBeDefined();
  });

  it('should be able to add employee', async () => {
    let result = await employeeService.add(employee);
    expect(result).toEqual(employee)
  });
});
