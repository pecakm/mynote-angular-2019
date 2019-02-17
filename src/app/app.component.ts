import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LogUpdateService } from './Services/log-update-service/log-update.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(
		translate: TranslateService,
		private logUpdateService: LogUpdateService
	) {
		translate.setDefaultLang('pl');
		translate.use('pl');
	}
}
