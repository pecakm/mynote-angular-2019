import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/app/Helpers/Constants';
import { NoteService } from 'src/app/Services/note-service/note.service';
import { Note } from 'src/app/Models/Note';

@Component({
	selector: 'app-week',
	templateUrl: './week.component.html',
	styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
	date = new Date();
	notes: Note[] = [];

	constructor(
		private noteService: NoteService
	) { }

	ngOnInit() {
		this.loadNotes();
	}

	loadNotes() {
		const dayOfWeek = this.date.getDay();

		if (dayOfWeek == 0) {
			this.date.setDate(this.date.getDate() - 6);
		} else {
			this.date.setDate(this.date.getDate() - (dayOfWeek - 1));
		}
		
		this.date.setHours(0, 0, 0, 0);

		this.noteService.getNotes(Number(this.date)).subscribe(notes => {
			for (let i = 0; i < 7; i++) {
				const day = this.date.getTime() + i * CONSTANTS.TIMESTAMP_24_HOURS;
				const note = notes.find(note => note.date == day);

				if (note) {
					this.notes.push(note);
				} else {
					this.notes.push(new Note(day));
				}
			}
		}, error => {
			alert('Coś poszło nie tak...');
		});
	}

	previousWeek() {
		this.clearNotes();
		this.date.setDate(this.date.getDate() - 7);
		this.loadNotes();
	}

	clearNotes() {
		this.notes = [];
	}

	nextWeek() {
		this.clearNotes();
		this.date.setDate(this.date.getDate() + 7);
		this.loadNotes();
	}
}
