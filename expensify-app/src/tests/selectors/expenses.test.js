import moment from "moment";
import getVisibleExpenses from "../../selectors/expenses";
import expenses from '../fixtures/expenses'



test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[0] ])
})

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(1),
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])  
})

test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])  
})

test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]])  
})

