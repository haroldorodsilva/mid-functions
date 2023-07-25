import { BankAccount } from "./BankAccount";
import { IBankAccount } from "./interfaces";

const ACCOUNT_CHEKING_MIN_DEPOSIT = 1000
const ACCOUNT_CHEKING_MAX_WITHDRAW = 5000

export class BackAccountChecking extends BankAccount implements IBankAccount {
    protected validateDeposit(value: number): boolean {
        return (value > 0 && value >= ACCOUNT_CHEKING_MIN_DEPOSIT);
    }

    protected validatWithdraw(value: number): boolean {
        return (value > 0 && value <= ACCOUNT_CHEKING_MAX_WITHDRAW);
    }
}