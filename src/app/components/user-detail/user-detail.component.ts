import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
	id: number;
	user: object = {};

  constructor(
  		private route: ActivatedRoute,
  		private router: Router,
  		public dataService: DataService
  	) {
  		this.route.params.subscribe((params: Params) => {
  			// console.log(params);
  			this.id = params.id;
  			
  		});
  	}

  ngOnInit() {

  	this.dataService.getUser(this.id).subscribe(user => {
  				this.user = user;
  			});
  }

}
