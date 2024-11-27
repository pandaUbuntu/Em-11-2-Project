import { MouseEventHandler } from "react"

export type ButtonType = {
    handleClick: MouseEventHandler<HTMLButtonElement>
}

export type CategoryType = {
    id: number,
    name: string,
}