import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/app/Helpers/Constants';

@Component({
	selector: 'app-week',
	templateUrl: './week.component.html',
	styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
	date = new Date();
	dates: number[] = [];

	constructor() { }

	ngOnInit() {
		this.setWeekDates();
	}

	setWeekDates() {
		const dayOfWeek = this.date.getDay();

		if (dayOfWeek == 0) {
			this.date.setDate(this.date.getDate() - 6);
		} else {
			this.date.setDate(this.date.getDate() - (dayOfWeek - 1));
		}
		
		this.date.setHours(0, 0, 0, 0);

		for (let i = 0; i < 7; i++) {
			const day = this.date.getTime() + i * CONSTANTS.TIMESTAMP_24_HOURS;
			this.dates.push(day);
		}
	}

	previousWeek() {
		this.clearDates();
		this.date.setDate(this.date.getDate() - 7);
		this.setWeekDates();
	}

	clearDates() {
		this.dates = [];
	}

	nextWeek() {
		this.clearDates();
		this.date.setDate(this.date.getDate() + 7);
		this.setWeekDates();
	}
}
