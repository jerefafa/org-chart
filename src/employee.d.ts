import { ProjectComponent } from "./component.model";
import { Customer } from "./customer.model";
import { Product } from "./product.model";

export interface IEmployee {
    name: string;
    designation: string;
    subordinates: IEmployee[];
}
export declare class Employee implements IEmployee {
    name: string;
    designation: string;
    subordinates: Employee[];
    manager?: Employee;
    components?: ProjectComponent[];
    customers?: Customer[];
    products?: Product[];

    constructor(orgStructure: string[], manager?: Employee);
}
