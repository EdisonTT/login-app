import { Component, OnInit } from '@angular/core';
import { AccountsData } from './accounts.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private demo:AccountsData){
  }
ngOnInit(){
  
}

  
}
