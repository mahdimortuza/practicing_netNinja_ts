interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}

const me: IsPerson = {
    name: "kola",
    age: 30,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number):number {
        console.log("I spend", amount);
        return amount
    }
}

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name)
}

greetPerson(me)




// import {Invoice} from './classes/Invoice.js'

// const invOne = new Invoice('mario', 'work on mario website', 250)
// const invTwo = new Invoice('luigi', 'work on luigi website', 300)

// const invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv => {
//     console.log(inv.client, inv.format());
// })
