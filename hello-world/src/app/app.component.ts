import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	displayDetails = false;
	clicksCount: Date[] = [];

	onDisplayDetails() {
		this.clicksCount.push(new Date());
		this.displayDetails = !this.displayDetails;
	}

	blueColor() {
		return this.clicksCount.length >= 5 ? 'blue' : 'white';
	}
}
