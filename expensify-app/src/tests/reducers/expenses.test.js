import expenseReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses'


test('should set default state', () => {    
    const state = expenseReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by ID if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add expense', () => {
    const newExpense = {
        id: '4',
        description: 'Lawn Care',
        note: '',
        amount: 785,
        createdAt: 6
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual([...expenses, newExpense])
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description: 'Bent'
        }
    }

    const state = expenseReducer(expenses, action)
    expect(state[0].description).toEqual('Bent')

})

test('should not edit an expense - id dont match', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 1,
        updates: {
            description: 'Bent'
        }
    }

    const state = expenseReducer(expenses, action)
    expect(state).toEqual(expenses)

})
