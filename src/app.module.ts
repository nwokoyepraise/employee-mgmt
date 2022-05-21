import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [EmployeeModule, ConfigModule.forRoot(), MongooseModule.forRoot(`mongodb+srv://main:${process.env.MONGO_PASSWORD}@cluster0.j5dr7.mongodb.net/nest?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
