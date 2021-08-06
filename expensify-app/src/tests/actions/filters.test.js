import { setStartDate, setEndDate, setTextFilter, sortBy } from "../../actions/filters";
import moment from 'moment'
import { exp } from "prelude-ls";

test('should generate set start date action object', () => {
 const action = setStartDate(moment(0))
 expect(action).toEqual({
     type: 'SET_START_DATE',
     startDate: moment(0)
 })
})

test('should generate set end date action object', () => {
 const action = setEndDate(moment(0))
 expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
 })
})

test('should set up the default action object to set the text filter', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: undefined
    })
})

test('should set up the action object to set the text filter', () => {
    const action = setTextFilter('test')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})

test('should set up the sort by action object', () =>{
    const action = sortBy('date')
    expect(action).toEqual({
        type: 'SORT_BY',
        sortBy: 'date'
    })
})