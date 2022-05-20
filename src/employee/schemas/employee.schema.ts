import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type EmployeeDocument = Employee & Document;

@Schema()
export class Address {
    @Prop({required: true})
    city: string

    @Prop({required: true})
    zipCode: number

    @Prop({required: true})
    addressLine1: string

    @Prop()
    addressLine2: string
}

@Schema({timestamps: true})
export class Employee {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    phone: string;

    @Prop({required: true})
    homeAddress: Address;

    @Prop({required: true})
    dob: Date;

    @Prop({required: true})
    doe: Date;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee)