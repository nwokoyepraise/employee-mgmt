import { Employee } from '../schemas/employee.schema';

export const employee: Employee = {
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

export const updatedEmployee: Employee = {
  name: 'John Doe',
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

export const softDeletedEmployee = {
  name: 'John Doe',
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
  isDeleted: false,
  deletedAt: null,
};
