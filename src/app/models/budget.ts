import { BusgetServices } from "./busget-services";

export interface Budget {
    id:number;
    client_name:string;
    proposal_validation:string;
    payment_condition:string;
    active:boolean;
    create_at:Date;
    updated_at:Date;
    services:Array<BusgetServices>;
}
