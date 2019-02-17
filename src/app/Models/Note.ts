import { User } from './User';

export class Note {
	_id: string;
	content: string;
	date: number;
	user: User;

	constructor(date: number) {
		this.date = date;
	}
}
