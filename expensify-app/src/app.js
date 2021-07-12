import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()
store.dispatch(addExpense({ description: 'Water Bill', amount: 200 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 250 }))
store.dispatch(setTextFilter('gas'))


console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters))
ReactDOM.render(<AppRouter />, document.getElementById('app'))
