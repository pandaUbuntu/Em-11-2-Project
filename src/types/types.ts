import { MouseEventHandler } from "react"

export type ButtonType = {
    handleClick: MouseEventHandler<HTMLButtonElement>
}

export type DeleteButtonType = {
    handleDelete: React.MouseEventHandler<HTMLButtonElement>,
    catagoryName: string
}

export type CategoryType = {
    id: number,
    name: string,
}