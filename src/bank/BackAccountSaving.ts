import { BankAccount } from "./BankAccount";
import { IBankAccount } from "./interfaces";

const ACCOUNT_SAVING_MIN_DEPOSIT = 200
const ACCOUNT_SAVING_MAX_WITHDRAW = 500

export class BankAccountSaving extends BankAccount implements IBankAccount {
    protected validateDeposit(value: number): boolean {
        return (value > 0 && value >= ACCOUNT_SAVING_MIN_DEPOSIT);
    }

    protected validatWithdraw(value: number): boolean {
        return (value > 0 && value <= ACCOUNT_SAVING_MAX_WITHDRAW);
    }
}