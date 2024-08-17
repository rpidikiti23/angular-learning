import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  activeTab: string = 'signup';

  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {}
  
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('SignUp form', this.signupForm.value);
      
    }
  }

  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup): { [key: string]: boolean } | null => {
      const passControl = formGroup.get(password);
      const confirmPassControl = formGroup.get(confirmPassword);
  
      if (!passControl || !confirmPassControl) {
        return null; 
      }
  
      if (confirmPassControl.errors && !confirmPassControl.errors['mustMatch']) {
        return null; 
      }
  
      if (passControl.value !== confirmPassControl.value) {
        confirmPassControl.setErrors({ mustMatch: true });
        return { mustMatch: true }; 
      } else {
        confirmPassControl.setErrors(null);
        return null; 
      }
    };
  }

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }
  
  onClick(){
    console.log("cancel XXXX");
    this.router.navigate(['/login']);
  }

}
