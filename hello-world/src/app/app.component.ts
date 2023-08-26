import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	displayDetails = false;
	clicksCount: number[] = [];

	onDisplayDetails() {
		this.clicksCount.push(this.clicksCount.length + 1);
		this.displayDetails = !this.displayDetails;
	}

	blueColor() {
		return this.clicksCount.length >= 5 ? 'blue' : 'white';
	}
}
