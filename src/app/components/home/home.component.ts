import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	users: Array<string>;
	list: Array<any>;
	user: Object;
	isEdit: boolean = false;
	selectedIndex: number = -1;
	
	// items: Array<any> = []; 
  constructor(public dataService:DataService) { 
  	// this.users = this.dataService.getUsers();
  	// console.log(this.dataService.getUsers());
  	// this.dataService.getUsers().subscribe(data=> {
  	// 	this.items.push(data);
  	// 	console.log(data);
  	// });
  	this.getEmptyUser();

  	this.dataService.getUserList().subscribe(list=> {
  		// console.log(list);
  		this.list = list;
  	});


  }

  getEmptyUser() {
  	this.user = {
		name: '',
		email: '',
		phone: ''
	};
  }

  saveUser() {
  	if (this.isEdit) {
  		this.dataService.updateUser(this.user).subscribe(user=> {
	  		this.list.splice(this.selectedIndex, 1, user);
	  		this.getEmptyUser();
	  		this.isEdit = false;
	  	});
  	} else {
  		this.dataService.saveUser(this.user).subscribe(user => {
	  		this.list.unshift(user);
	  		this.getEmptyUser();
	  	});
  	}
  	
  }

  deleteUser(id, index) {
  	this.dataService.deleteUser(id).subscribe(res => {
  		// console.log(res);
  		this.list.splice(index, 1);
  	});
  }

  updateUser(user, index) {
  	this.user = user;
  	this.isEdit = true;
  	this.selectedIndex = index;
  }

  ngOnInit() {
  }

}
