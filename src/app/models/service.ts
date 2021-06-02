import { Area } from "./area";

export interface Service {
    id:number;
	code:string;
    name:string;
	detail:string;
    active:boolean;
    price:number;
    area:Area;
}
