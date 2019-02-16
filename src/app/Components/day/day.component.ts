import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-day',
	templateUrl: './day.component.html',
	styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
	editing = false;
	@Input() timestamp: number;
	date: Date;

	constructor() {}

	ngOnInit() {
		this.date = new Date(this.timestamp);
	}

	edit() {
		this.editing = true;
	}

	delete() {
		console.log('delete clicked.');
	}

	save() {
		this.editing = false;
	}

	cancel() {
		this.editing = false;
	}
}
