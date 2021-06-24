const appDiv = document.getElementById('app')

let hideDetails = true
const hideDetailsToggle = () => {
    hideDetails = !hideDetails
    render()
}
const render = () => {

    const template = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={hideDetailsToggle} >{hideDetails ? 'Show Details' : 'Hide Details'}</button>
        <p>{!hideDetails && 'This is something that you now can see'}</p>
        </div>

    )
    ReactDOM.render(template, appDiv)
}

render()