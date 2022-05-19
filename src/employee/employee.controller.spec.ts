import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';

describe('EmployeeController', () => {
  let controller: EmployeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
    }).compile();

    controller = module.get<EmployeeController>(EmployeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be able to add employee', async () => {
    const employee = await controller.add()
    expect(employee).not.toBeNull();
  });
});
