//set filter text
export const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text

})

// Sort by date
export const sortBy = (sortBy) => ({
    type: 'SORT_BY',
    sortBy
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
