import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/Services/note-service/note.service';

@Component({
	selector: 'app-day',
	templateUrl: './day.component.html',
	styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
	editing = false;
	@Input() timestamp: number;
	date: Date;

	constructor(
		private noteService: NoteService
	) {}

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
		this.noteService
		this.editing = false;
	}

	cancel() {
		this.editing = false;
	}
}
