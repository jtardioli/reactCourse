const appObject = {
    title: 'Indecision App',
    subTitle: 'put your hand in the life of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value

    if(option) {
        appObject.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
    console.log(appObject.options)
}

const removeAll = () => {
    appObject.options = []
    renderApp()
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObject.options.length)
    const option = appObject.options[randomNum]
    alert(option)

}



const renderApp = () => {
    const template = (

        <div>
        <h1>{appObject.title}</h1>
        {appObject.subTitle && <p>{appObject.subTitle}</p>}
        <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options' }</p>
        <p>{appObject.options.length}</p>
        <button disabled={!appObject.options.length > 0} onClick={makeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>
        <ol>
            {
                appObject.options.map((option, index) => {
                    return <li key={index}>{option}</li>
                    
                })
            }
        </ol>
    
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
    </div>
    )
    ReactDOM.render(template, appRoot)
}


const appRoot = document.getElementById('app')
renderApp()
