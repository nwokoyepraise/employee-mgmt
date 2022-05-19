import { Controller, Post } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Post("/add")
    add() {
        
    }

}
