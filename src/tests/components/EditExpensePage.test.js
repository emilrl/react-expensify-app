import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;
const expense = expenses[2];
const id = expense.id;

beforeEach(() => {
	editExpense = jest.fn();
	removeExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage 
			editExpense={editExpense} 
			removeExpense={removeExpense} 
			history={history} 
			expense={expense} 
		/>
	)
})

test('should render EditExpensePage', () => {
	expect(wrapper).toMatchSnapshot()
});

test('should handle editExpense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expense);
	expect(editExpense).toHaveBeenLastCalledWith(id, expense);
	expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle RemoveExpense', () => {
	wrapper.find('button').simulate('click');
	expect(removeExpense).toHaveBeenLastCalledWith({ id });
	expect(history.push).toHaveBeenCalledWith('/')
});