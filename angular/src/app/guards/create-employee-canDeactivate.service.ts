import { CanDeactivate } from "@angular/router";
import { RegistrationComponent } from "../components/registration/registration.component";

export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<RegistrationComponent>{
    canDeactivate(component: RegistrationComponent):boolean{
        if(component.createRegistrationForm.dirty){
return confirm('Are you sure you want to discard your changes? ');
        }
        return true;
    }
}