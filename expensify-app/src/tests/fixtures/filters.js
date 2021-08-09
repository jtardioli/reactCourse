import moment from 'moment'

const filters = {
    text: '',
    sortBy: 'date',
    startdate: undefined,
    endDate: undefined
}

const altFilters = {
    text: 'billsz',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(4, 'days')
}

export { filters, altFilters }