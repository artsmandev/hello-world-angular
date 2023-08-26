import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	buttonEnabled = false;
	clickButtonMessage = 'The button was not clicked'
	inputText: string;

	constructor() {
		setTimeout(() => {
			this.buttonEnabled = true;
		}, 2000);
	}

	onClickButton() {
		this.clickButtonMessage = 'The button was clicked!'
	}

	onInputUpdate(event: Event) {
		this.inputText = (<HTMLInputElement>event.target).value;
	}
}
