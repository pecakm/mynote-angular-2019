import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user-service/user.service';
import { CONSTANTS } from 'src/app/Helpers/Constants';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	disabledButton = false;
	email: string;
	pass: string;

	constructor(
		private router: Router,
		private userService: UserService
	) { }

	ngOnInit() {}

	logIn() {
		this.disabledButton = true;
		
		const credentials = {
			email: this.email,
			password: this.pass
		};

		this.userService.logIn(credentials)
			.subscribe(token => {
				if (token) {
					localStorage.setItem(CONSTANTS.TOKEN, token);
					this.router.navigate(['/calendar']);
				}
			}, error => {
				alert('Niepoprawny login lub hasło.');
				this.disabledButton = false;
			});
	}

}
