import { Component, OnInit } from '@angular/core';
import { Expenses } from '../models/expenses';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expenses-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './expenses-list.html',
  styleUrls: ['./expenses-list.css'],
})
export class ExpancesListComponent implements OnInit {
  newExpenseTitle: string = '';
  newExpenseAmount: number = 0;
  newExpenseDate: string = '';

  expenses: Expenses[] = [];

  ngOnInit(): void {
    let savedExpenses = localStorage.getItem('expenses');

    this.expenses = savedExpenses ? JSON.parse(savedExpenses) : [];
  }

  addExpense() {
    if (this.newExpenseTitle.trim().length && this.newExpenseAmount && this.newExpenseDate) {
      let newExpense: Expenses = {
        id: Date.now(),
        title: this.newExpenseTitle,
        amount: this.newExpenseAmount,
        date: new Date(this.newExpenseDate),
      };

      this.expenses.push(newExpense);

      this.newExpenseTitle = '';
      this.newExpenseAmount = 0;
      this.newExpenseDate = '';
    }

    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }

  deleteExpense(index: number) {
    this.expenses.splice(index, 1);

    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }
}
