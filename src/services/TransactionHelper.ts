import { TransactionType, typeData } from "./TypeHelper"
import { CategoryType } from "../types/types"
import { getCategory } from "./CategoryHelper"

export type Transaction = {
    id: number,
    value: number,
    categoryId: number,
    typeId: number
}

export type TransactionFullData = Transaction & {
    categoryName: string,
    typeName: string
}

export function createTransaction(transaction: Transaction){
    let str:any = localStorage.getItem('transactions');
    if (str != null){
        const list:Transaction[] = JSON.parse(str);
        list.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(list));
    }
    else {
        localStorage.setItem('transactions', JSON.stringify([transaction]));
    }
}

export function deleteTransaction(id: number){
    localStorage.setItem('transactions', JSON.stringify(getTransactions().filter((value:Transaction) => value.id!== id)));
}

export function getTransactions(): Transaction[] {
    let str:any = localStorage.getItem('transactions');
    if (str != null){
        return JSON.parse(str);
    }

    return [];
}

export function getTransactionsFullData(): TransactionFullData[]{
    const transactions: Transaction[] = getTransactions();
    

    const fullData:TransactionFullData[] = transactions.map((value: Transaction) => {
        return {
            ...value,
            categoryName: getCategory().find((cat: CategoryType) => cat.id === value.categoryId)?.name || '',
            typeName: typeData.find((type: TransactionType) => type.id === value.typeId.toString())?.name || ''
        }
    })

    return fullData;
}

export function calculateBudget():number{
    const transactions: Transaction[] = getTransactions();
    let budget:number = 0;

    transactions.forEach((value: Transaction) => {
        
        let val:number = Number(value.value);
        if (value.typeId === 1){
            budget += val;
        }
        else {
            budget -= val;
        }
    })

    return budget;
}
