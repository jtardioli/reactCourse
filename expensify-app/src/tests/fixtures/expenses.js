import moment from 'moment'


export default [{
    id: '1',
    description: 'Rent',
    note: '',
    amount: 195,
    createdAt: 0

}, {
    id: '2',
    description: 'not gum',
    note: '',
    amount: 1200,
    createdAt: moment(0).subtract(4, 'days').valueOf()

}, {
    id: '3',
    description: 'coffee',
    note: '',
    amount: 78,
    createdAt: moment(0).add(4, 'days').valueOf()

}]