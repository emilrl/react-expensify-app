import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should correctly add up a single expense', () => {
	const expense = [expenses[1]];
	const amount = expense[0].amount;
	const res = selectExpensesTotal(expense);
	expect(res).toBe(amount)
});

test('should correctly add up multiple expenses', () => {
	const res = selectExpensesTotal(expenses);
	expect(res).toBe(114195);
});

test('should return 0 if no expenses', () => {
	const res = selectExpensesTotal([]);
	expect(res).toBe(0);
});