import moment from "moment";
import filtersReducer from "../../reducers/filters";



test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'  })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY', sortBy: 'amount' })
    expect(state.sortBy).toBe('amount')
})

test('should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'hello from text'})
    expect(state.text).toBe('hello from text')
})

test('should set startDate filter',() => {
    const startDate = moment()
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})
test('should set endDate filter',() => {
    const endDate = moment()
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})

