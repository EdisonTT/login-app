import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsData } from '../accounts.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private data : AccountsData, private router : Router) { }

  addUserForm : FormGroup;
  newPassword : string;

  ngOnInit(): void {

    this.addUserForm = new FormGroup({
      'name' : new FormControl('', [Validators.required]),
      'mobileNumber' : new FormControl('',[Validators.required, 
                    Validators.min(1000000000), 
                    Validators.max(9999999999)]),
      'email' : new FormControl('',[Validators.required, Validators.email]),
      'newPassword' : new FormControl('',[Validators.required,this.newPass.bind(this)]),
      'confirmPassword' : new FormControl('',
        [Validators.required, this.passwordCheck.bind(this)])
    });
  }

  onSubmit(){
    this.data.addNewUser(this.addUserForm.get('name').value,
            this.addUserForm.get('newPassword').value,
            this.addUserForm.get('mobileNumber').value,
            this.addUserForm.get('email').value);
  this.addUserForm.reset();
  setTimeout(()=>{this.router.navigate(['../'])},500);
  
  }

  newPass(control : FormControl):{[s:string]:boolean}{
    this.newPassword = control.value;
    return null;
  }

  passwordCheck(control : FormControl):{[s:string]:boolean}{
    let confirmPassword = control.value;
    if (this.newPassword===confirmPassword){
      return null;
    }      
    else{
      return {'mailError':false};
    }
  }

}
