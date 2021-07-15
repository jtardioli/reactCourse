import uuid  from "uuid"


// Add Expense
export const addExpense = (
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
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
    
})

// Edit expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
}) 
