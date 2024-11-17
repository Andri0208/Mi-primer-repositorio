import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'




class Person {
  constructor(name, lastName) {
    this.name = name
    this.lastName = lastName
  }
}

const user = new Person ("juan", "Perez") 
const user2 = new Person ("Maria", "Garcia") 
console.log(user);
console.log(user2);


class Programer extends Person {
  constructor(name, lastName, age) {
    super(name, lastName)
    this.age = age
  }
}
const programer1 = new Programer("Andri", "Mateo", 20);
console.log(programer1);
const body = document.querySelector("body")
const old = document.querySelector(".old-div")
body.removeChild(old)
setupCounter(document.querySelector('#counter'))
