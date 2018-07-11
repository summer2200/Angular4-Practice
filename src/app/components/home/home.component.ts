import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	users: Array<string>;
  constructor(public dataService:DataService) { 
  	this.users = this.dataService.getUsers();
  	// console.log(this.dataService.getUsers());
  }

  ngOnInit() {
  }

}
