//set filter text
export const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text

})

// Sort by date
export const sortByDate = () => ({
    type: 'SORT_BY',
    sortBy: 'date'
})

// Sort by amount
export const sortByAmount = () => ({
    type: 'SORT_BY',
    sortBy: 'amount'
})

// set start date
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})
