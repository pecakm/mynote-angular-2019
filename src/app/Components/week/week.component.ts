import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/app/Helpers/Constants';

@Component({
	selector: 'app-week',
	templateUrl: './week.component.html',
	styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		console.log(localStorage.getItem(CONSTANTS.TOKEN));
	}
}
