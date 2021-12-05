import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AccountsData{
    
    constructor(private router:Router){
        
    }
    accountData =
    [
        {
            username : '',
            password : '',
            id:'',
            mobile : '',
            email : '',
            name : ''
        }
    ];

    userID : number = 10001;

    activeUser : {
        username : string,
        password : string,
        id:string,
        mobile : string,
        email : string,
        name : string
    };

    addNewUser(name: string,
                 password : string,
                 mobileNumber : string,
                 email: string): void {
        let autoUserName : string;
        autoUserName = name.replace(/\s/g,'').toLowerCase();

        this.accountData.push({
            username : autoUserName,
            password : password,
            id: String(this.userID),
            mobile : mobileNumber,
            email : email,
            name : name 
        });
        this.userID += 1;
        alert('User registered \n user ID : '+ autoUserName);
        console.log(this.accountData);
    }

    currentUser(userLogin : {
        username : string,
        password : string,
        id:string,
        mobile : string,
        email : string,
        name : string
    }):void{
        this.activeUser = userLogin;
    }

    logout(){
        this.currentUser({
            username : '',
            password : '',
            id:'',
            mobile : '',
            email : '',
            name : ''
        });
        this.router.navigate(['../'])
    }
}