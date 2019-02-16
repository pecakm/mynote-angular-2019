import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-day',
	templateUrl: './day.component.html',
	styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
	@Input() timestamp: number;
	date: Date;

	constructor() {}

	ngOnInit() {
		this.date = new Date(this.timestamp);
	}
}
