import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'





ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

class Oldsyntax {
    constructor() {
        this.name = 'mike'
    }
}

const oldSyntax = new Oldsyntax() 
console.log(oldSyntax)

//----------------

class NewSyntax {
    name = 'bob'
}

const newSyntax = new NewSyntax()
console.log(newSyntax)