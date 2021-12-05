import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsData } from '../accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tempdata = [];
  signupForm : FormGroup;
  success : boolean;
  islogined : boolean = false;
  constructor(private data : AccountsData, private router : Router) { }

  ngOnInit() {

    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required,this.isExist.bind(this)]),
      'password' : new FormControl(null, Validators.required)
    })
  }

  iSCorrect(user : string, pass : string):boolean{
    let status : boolean;
    for(let x of this.data.accountData){
      if(x.username === user){
        status =false;
        if(x.password===pass){
          status = true;
          this.data.currentUser(x);
        }
        break;
      }
      else{
        status = false;
      }
    }
    return status;
  };

  onSubmit(){
     //console.log(this.signupForm)
     this.islogined = true;
     this.success = this.iSCorrect(this.signupForm.get('username').value,
                                this.signupForm.get('password').value);
     if(this.success){
      this.router.navigate(['../home'])
     }
  }

  isExist(control:FormControl):{[s: string]: boolean}{
   let check : boolean;
   for(let user of this.data.accountData){
     if(user.username === control.value){
       check = true;
       break;
     }
     else{
       check = false;
     }
   }
   if(!check){
     return {'isExist': true};
   }
   else{
     return null;
   }

}
}

