import { CategoryType } from "../types/types";

export function createCategory(name: string){
    if(checkCategoryName(name) === true){
        throw new Error('Category name must be provided');   
    }

    const newCategory:CategoryType = {
        id: Math.floor(Math.random() * 1000),
        name: name
    }

    addCategory(newCategory);
}

export function deleteCategory(id: number){
    let categories:CategoryType[] = getCategory();
    let newCategories:CategoryType[] = categories.filter((value:CategoryType) => value.id!== id);
    localStorage.setItem('categories', JSON.stringify(newCategories));
}

function checkCategoryName(name: string):boolean{
    const categories:CategoryType[] = getCategory();
    let isExist:boolean = false;

    categories.forEach((value:CategoryType) => {
        if (value.name == name){
            isExist = true;
        }
    });

    return isExist;
}

export function getCategory():CategoryType[] {
    let str:any = localStorage.getItem('categories');
    if (str != null){
        return JSON.parse(str);
    }
    return [];
}

function addCategory(category:CategoryType){
    let str:any = localStorage.getItem('categories');
    if (str != null){
        const list:CategoryType[] = JSON.parse(str);
        list.push(category);
        localStorage.setItem('categories', JSON.stringify(list));
    }
    else {
        localStorage.setItem('categories', JSON.stringify([category]));
    }
}

