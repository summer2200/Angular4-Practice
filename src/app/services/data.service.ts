import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
	users: string[];
	// data: Observable<Array<number>>;
 


	constructor(public http: Http) {
		
	}

	// getUsers() {
	// 	// return this.users;
	// 	this.data = new Observable(observer=> {
	// 		setTimeout(()=> {
	// 			observer.next(1);
	// 		}, 1000);
	// 		setTimeout(()=> {
	// 			observer.next(2);
	// 		}, 2000);
	// 		setTimeout(()=> {
	// 			observer.next(3);
	// 		}, 3000);
	// 		setTimeout(()=> {
	// 			observer.complete();
	// 		}, 4000);

	// 	});

	// 	return this.data;
	// }

	getUserList() {
		return this.http.get('http://jsonplaceholder.typicode.com/users')
					.pipe(map(res => res.json()));
	}

	saveUser(user) {
		return this.http.post('http://jsonplaceholder.typicode.com/users', user)
				   .pipe(map(res=>res.json()));
	}

	deleteUser(id) {
		return this.http.delete('http://jsonplaceholder.typicode.com/users/' + id)
					.pipe(map(res => res.json()));
	}

	updateUser(user) {
		return this.http.put('http://jsonplaceholder.typicode.com/users/' + user.id, user)
					.pipe(map(res => res.json()));
	}

}




