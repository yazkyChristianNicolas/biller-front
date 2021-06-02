import { Budget } from "./budget";
import { Service } from "./service";

export interface BusgetServices {
    
    budget:Budget;
    service:Service;
    optional:boolean;
    quantity:number;
}
