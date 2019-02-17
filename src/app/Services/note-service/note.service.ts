import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/app/Helpers/Constants';
import { Observable } from 'rxjs';
import { Note } from 'src/app/Models/Note';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class NoteService {
	private getNotesUrl = CONSTANTS.BASE_API_URL + 'notes/';
	private saveNoteUrl = CONSTANTS.BASE_API_URL + 'notes/save';

	constructor(
		private http: HttpClient
	) { }

	getNotes(timestamp: number): Observable<Note[]> {
		return this.http.get<Note[]>(this.getNotesUrl + timestamp);
	}

	saveNote(note: Note): Observable<string> {
		return this.http.post<string>(this.saveNoteUrl, note);
	}
}
