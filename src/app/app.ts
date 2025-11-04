import { Component } from '@angular/core';
import { ExpancesListComponent } from './expenses-list/expenses-list';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [ExpancesListComponent],
})
export class AppComponent {}
