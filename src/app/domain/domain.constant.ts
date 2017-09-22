import { InjectionToken } from "@angular/core";
import { DomainInterface } from "./domain.interface";

export const DOMAIN_CONFIG : DomainInterface = {

 DOMAIN : 'http://localhost:5000/card'

};

export let DOMAIN= new InjectionToken< DomainInterface >( 'app.config' );