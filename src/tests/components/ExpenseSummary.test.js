import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary correctly with one expense', () => {
	const expensesTotal = selectExpensesTotal([expenses[0]]);
	const expenseCount = [expenses[0]].length;
	const wrapper = shallow(<ExpenseSummary expensesTotal={expensesTotal} expenseCount={expenseCount} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with two expenses', () => {
	const expensesTotal = selectExpensesTotal(expenses);
	const expenseCount = expenses.length;
	const wrapper = shallow(<ExpenseSummary expensesTotal={expensesTotal} expenseCount={expenseCount} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with no expenses', () => {
	const expensesTotal = selectExpensesTotal([]);
	const expenseCount = 0;
	const wrapper = shallow(<ExpenseSummary expensesTotal={expensesTotal} expenseCount={expenseCount} />);
	expect(wrapper).toMatchSnapshot();
});