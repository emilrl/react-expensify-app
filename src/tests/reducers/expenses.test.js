import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should add expense to state', () => {
	const expense = {
		id: '123abc',
		description: 'Rent',
		amount: 10000,
		createdAt: moment(),
		note: '',
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
		}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense with id not found', ()  => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '4'
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
	const amount = 650000
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[2].id,
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[2].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '4',
		updates: {
			amount: 6500000
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});