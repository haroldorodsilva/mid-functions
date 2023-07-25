export interface IBankAccount {
    deposit(value: number): boolean
    withdraw(value: number): boolean
    getBalance(): number
}

export enum AccountTypes {
    saving,
    checking
}