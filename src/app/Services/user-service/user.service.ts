import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CONSTANTS } from 'src/app/Helpers/Constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private logInUrl = CONSTANTS.BASE_API_URL + 'users/login';

  constructor(
    private http: HttpClient
  ) { }

  logIn(credentials): Observable<string> {
		return this.http.post<string>(this.logInUrl, credentials);
	}
}
