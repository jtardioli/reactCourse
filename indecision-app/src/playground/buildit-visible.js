class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.hideDetailsToggle = this.hideDetailsToggle.bind(this)
        this.state = {
            hideDetails: false
        }
    }
    hideDetailsToggle() {
        this.setState((prevState) => {
            return {
                hideDetails: !prevState.hideDetails
                
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.hideDetailsToggle} >{this.state.hideDetails ? 'Show Details' : 'Hide Details'}</button>
                <p>{!this.state.hideDetails && 'This is something that you now can see'}</p>
            </div>
        )
    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))






// const appDiv = document.getElementById('app')

// let hideDetails = true
// const hideDetailsToggle = () => {
//     hideDetails = !hideDetails
//     render()
// }
// const render = () => {

//     const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={hideDetailsToggle} >{hideDetails ? 'Show Details' : 'Hide Details'}</button>
//         <p>{!hideDetails && 'This is something that you now can see'}</p>
//         </div>

//     )
//     ReactDOM.render(template, appDiv)
// }

// render()