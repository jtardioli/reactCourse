import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortBy, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortBy = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortBy={sortBy}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
     />
     )
})

test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilter with alt data', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'test text'
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)

})

test('should sortby date', () => {
    const value = 'date'
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    })
    expect(sortBy).toHaveBeenLastCalledWith(value)

})

test('should sortby amount', () => {
    const value = 'amount'
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    })
    expect(sortBy).toHaveBeenLastCalledWith(value)

})

test('handle date changes', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)

})

test('should handle date focus changes', () => {
    const calenderFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})



