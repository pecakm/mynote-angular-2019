import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/Services/note-service/note.service';
import { Note } from 'src/app/Models/Note';

@Component({
	selector: 'app-day',
	templateUrl: './day.component.html',
	styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
	editing = false;
	@Input() note: Note;
	contentValue: string;

	constructor(
		private noteService: NoteService
	) {}

	ngOnInit() {}

	edit() {
		this.editing = true;

		this.contentValue = this.note.content;
	}

	delete() {
		console.log('delete clicked.');
	}

	save() {
		this.editing = false;

		const note = new Note(this.note.date);
		note.content = this.contentValue;

		this.noteService.saveNote(note).subscribe(answer => {
			this.note = note;
		}, error => {
			alert('Coś poszło nie tak. Nie można zapisać notatki.');
			this.editing = true;
		});
	}

	cancel() {
		this.editing = false;
	}
}
