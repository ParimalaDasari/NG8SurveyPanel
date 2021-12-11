import { FormGroup } from '@angular/forms';
    
export function ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return null;
        }
        
        if ((control.value!=null) && (control.value !== matchingControl.value)) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
        if(formGroup.controls['agreeToTerms'].value!=true){
            formGroup.controls['agreeToTerms'].setErrors({ReadTerms:true});
        }else{
            formGroup.controls['agreeToTerms'].setErrors(null);
        }
            
    }
}