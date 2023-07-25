// Create a "Bank Account" class with methods for depositing, withdrawing and checking the
// balance. Then create subclasses for different account types, such as "Savings Account" and
// "Checking Account", with specific rules for each account type.

import { BackAccountChecking } from "./BackAccountChecking";
import { BankAccountSaving } from "./BackAccountSaving";

const saving = new BankAccountSaving()
const checking = new BackAccountChecking()


console.log('\n\n ========= Saving Deposit min: 200, widrawall max: 500')
saving.deposit(500)
console.log('Balance saving', saving.getBalance())

console.log('\nCan saving deposit 100', saving.deposit(100))
console.log('Check Balance saving', saving.getBalance())

console.log('\nCan saving deposit 1000', saving.deposit(1000))
console.log('Check Balance saving', saving.getBalance())

console.log('\nCan saving widrawall 800', saving.withdraw(800))
console.log('Check Balance saving', saving.getBalance())

console.log('\nCan saving widrawall 500', saving.withdraw(500))
console.log('Check Balance saving', saving.getBalance())

console.log('\n\n ========= Checking Deposit min: 1000, widrawall max: 5000')

checking.deposit(1000)
console.log('Balance checking', checking.getBalance())

console.log('\nCan checking deposit 500', checking.deposit(500))
console.log('Check Balance checking', checking.getBalance())

console.log('\nCan checking widrawall 6000', checking.withdraw(6000))
console.log('Check Balance checking', checking.getBalance())

console.log('\nCan checking widrawall 3000', checking.withdraw(3000))
console.log('Check Balance checking', checking.getBalance())