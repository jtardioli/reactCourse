import { createStore } from 'redux'


const incrementCount = ({ incrementBy  = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({setBy = 0} = {}) => ({
    type: 'SETBY',
    setBy
})
const resetCount = ({reset = 0} = {}) => ({
    type: 'RESET',
    reset
})

//Reducers

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            }
        case 'SETBY':
            return {
                count: action.setBy
            }
        case 'RESET': 
            return {
                count: state.count = 0
            }
        default:
                return state
    }
 
    
}


const store = createStore(countReducer())


store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 4 }))
store.dispatch(decrementCount({decrementBy: 10}))
store.dispatch(setCount({setBy: 8}))
store.dispatch(resetCount({}))
store.dispatch(incrementCount({ }))



