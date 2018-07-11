import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
	users: string[];
	constructor() {
		// code...
		this.users = ['Summer', 'Autumn', 'Winter'];
	}

	getUsers() {
		return this.users;
	}
}