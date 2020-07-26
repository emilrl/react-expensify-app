import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;
const expense = expenses[2];
const id = expense.id;

beforeEach(() => {
	editExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage 
			editExpense={editExpense} 
			startRemoveExpense={startRemoveExpense} 
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

test('should handle startRemoveExpense', () => {
	wrapper.find('button').simulate('click');
	expect(startRemoveExpense).toHaveBeenLastCalledWith({ id });
	expect(history.push).toHaveBeenCalledWith('/')
});