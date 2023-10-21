import { Invoice } from './classes/Invoice.js';
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web Work', 250);
docTwo = new Invoice('mario', 'plumbing work', 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.format());
});
