import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	username = '';
	status: string = 'offline';

	constructor() {
		this.status = Math.random() > 0.5 ? 'online' : 'offline';
	}

	getColor() {
		return this.status === 'online' ? 'green' : 'red';
	}
}
