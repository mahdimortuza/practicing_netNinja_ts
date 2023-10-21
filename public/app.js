"use strict";
const me = {
    name: "kola",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spend", amount);
        return amount;
    }
};
const dabul = {
    name: 'dabul',
    age: 65,
    speak(lan) {
        console.log(lan);
    },
    spend(taka) {
        console.log('dabul spent', taka);
        return taka;
    }
};
const addDabul = (dabul) => {
    console.log('abul ekta', dabul.name);
};
addDabul(dabul);
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
// import {Invoice} from './classes/Invoice.js'
// const invOne = new Invoice('mario', 'work on mario website', 250)
// const invTwo = new Invoice('luigi', 'work on luigi website', 300)
// const invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach(inv => {
//     console.log(inv.client, inv.format());
// })
