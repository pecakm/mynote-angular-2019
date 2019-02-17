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

	constructor(
		private noteService: NoteService
	) {}

	ngOnInit() {}

	edit() {
		this.editing = true;
	}

	delete() {
		console.log('delete clicked.');
	}

	save() {
		this.editing = false;

		const note = new Note(this.note.date);
		note.content = 'Lalaland';

		this.noteService.saveNote(note).subscribe(answer => {
			console.log(answer);
		}, error => {
			console.log(error);
		});
	}

	cancel() {
		this.editing = false;
	}
}
