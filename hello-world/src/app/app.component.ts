import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	server = '';
	status: string = 'offline';
	servers: string[] = [];

	constructor() {
		this.status = Math.random() > 0.5 ? 'online' : 'offline';
	}

	getColor() {
		return this.status === 'online' ? 'green' : 'red';
	}

	onAddServer() {
		this.servers.push(this.server);
	}
}
