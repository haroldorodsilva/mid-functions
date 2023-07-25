import { IBankAccount } from "./interfaces";

export class BankAccount implements IBankAccount {
    private balance = 0;

    deposit(value: number): boolean {
        if (!value) return false
        if (!this.validateDeposit(value)) return false;

        this.balance += value
        return true
    }

    withdraw(value: number): boolean {
        if (!value) return false
        if (!this.validatWithdraw(value)) return false;
        if (value > this.balance) return false

        this.balance -= value
        return true
    }

    getBalance(): number {
        return this.balance
    }

    protected validateDeposit(value: number): boolean {
        return true;
    }

    protected validatWithdraw(value: number): boolean {
        return true;
    }

}