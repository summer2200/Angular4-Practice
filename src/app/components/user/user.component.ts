import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	name:string;
	address: Address;
  hobbies: Array<string>;
  isEdit: Boolean;
  constructor() { 
  	// console.log('constructor ran...');
  }

  ngOnInit() {
  	// console.log('ngOninit ran...');
  	this.name = 'test';
  	this.address = {
  		street: '111',
  		state: '222',
  		country: '333'
  	};
    this.hobbies = ['play guitar', 'movies', 'sleep'];
    this.isEdit = false;

  }

  addHobby() {
    if (this.hobbies.indexOf('sing') < 0) {
      this.hobbies.unshift('sing');
    } 
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

  editUser() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
	street: string,
	state: string,
	country: string
}