import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters 
			filters={filters}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
			setTextFilter={setTextFilter}
			sortByAmount={sortByAmount}
			sortByDate={sortByDate}
		/>
	)
});

test('should render ExpenseListFilters wit halt data correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters correctly', () => {
	wrapper.setProps({ filters: altFilters })
	expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
	const text = 'New Text'
	const e = { target: { value: text } };
	wrapper.find('input').simulate('change', e);
	expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

test('should sort by date', () => {
	const e = { target: { value: 'date' } };
	wrapper.setProps({ filters: altFilters })
	wrapper.find('select').simulate('change', e);
	expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
	const e = { target: { value: 'amount' } };
	wrapper.find('select').simulate('change', e);
	expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
	const startDate = moment(0);
	const endDate = moment(0).add(5, 'years');
	wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
	expect(setStartDate).toHaveBeenLastCalledWith(startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
	const calendarFocused = 'endDate'
	wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
	expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});