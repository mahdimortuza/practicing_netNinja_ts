class Invoice {
    client: string
    details: string
    amount: number

    constructor(c: string, d: string, a: number) {
        this.client = c
        this.details = d
        this.amount = a
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('mario', 'work on mario website', 250)
const invTwo = new Invoice('luigi', 'work on luigi website', 300)

const invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)


console.log(invoices);