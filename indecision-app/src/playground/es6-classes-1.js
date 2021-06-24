class Person {
    constructor(fullName = 'Anonymous', age = 0) {
        this.fullName = fullName
        this.age = age
    }
    getGreeting() {
        return `Hi I am ${this.fullName}!`
    }
    getDiscription() {
        return `Hi I am ${this.fullName}! I am ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDiscription() {
        let description = super.getDiscription()
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if(this.homeLocation) {
            greeting += `I am from ${this.homeLocation}`
        }
        return greeting
        
    }
}

const me = new Traveler('Joshua Tardioli', 23, 'Ottawa')
const other = new Traveler()
console.log(me.getGreeting())
console.log(other.getGreeting())
