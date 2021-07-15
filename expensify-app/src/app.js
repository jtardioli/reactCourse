import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()
store.dispatch(addExpense({ description: 'Water Bill', amount: 450, createdAt: 2 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 500, createdAt: -1}))
store.dispatch(addExpense({ description: 'rent', amount: 109500, createdAt: 3 }))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters))
ReactDOM.render(jsx, document.getElementById('app'))
