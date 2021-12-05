import { Component, OnInit } from '@angular/core';

import { AccountsData } from '../accounts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public data : AccountsData) { }

  ngOnInit(): void {
  }
}
