import {Component} from "@angular/core";

@Component({
	selector: 'app-warning-alert',
	styleUrls: ['./warning-alert.component.css'],
	templateUrl: './warning-alert.component.html'
})
export class WarningAlertComponent {
	id: number =  10;
	color: string =  'brown';

	getColor() {
		return this.color;
	}
}
