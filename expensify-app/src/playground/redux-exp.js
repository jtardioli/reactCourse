import { add } from "lodash";
import { createStore, combineReducers } from "redux";
import uuid from 'uuid'


// Add Expense
const addExpense = (
    {// default values
        description = '', 
        note = '', 
        amount = '', 
        createdAt = ''}
    = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
    })

// Remove expense
const removeExpense = ({id} ={}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// Edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
}) 

//set filter text
const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text

})

// Sort by date
const sortByDate = () => ({
    type: 'SORT_BY',
    sortBy: 'date'
})

// Sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY',
    sortBy: 'amount'
})

// set start date
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

// Reducer Defaults
const expenseReducerDefaultState = []
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

//EXPENSE REDUCER
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
    })

        default:
            return state
    }
} 

// FILTERS REDUCER
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            console.log(state)
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

// Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if(sortBy === 'date') {
           return a.createdAt < b.createdAt? 1 : -1
        } else if(sortBy === 'amount') {
            return a.amount < b.amount? 1 : -1
        } 
    })
}

//Store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100000000, createdAt: -100000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 115000, createdAt: -1000 }))
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo .expense.id, { amount: 500 }))
//store.dispatch(setTextFilter('R'))
//store.dispatch(sortByAmount()) // amount
//store.dispatch(sortByDate()) // date

//store.dispatch(setStartDate(125))
// //store.dispatch(setStartDate())
// store.dispatch(setEndDate())
