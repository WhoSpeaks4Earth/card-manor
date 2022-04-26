import { ICard } from "./ICard";


export interface IDeck {
    name: string,
    description: string,
    cards: ICard[]
}