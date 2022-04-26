import { IDeck } from "../models/IDeck";


export const cardDecks: IDeck[] = [
    {
        name: "Solar System",
        description: "Notable objects from our Solar System. Objects are ranked in categories of mass, size, material, and speed.",
        cards: [
            {
                title: "Jupiter",
                ranks: [2, 9, 7, 9]
            },
            {
                title: "Mars",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Earth",
                ranks: [4, 6, 8, 4]
            },
            {
                title: "Sun",
                ranks: [10, 7, 3, 10]
            },
            {
                title: "Saturn",
                ranks: [6, 3, 1, 8]
            },
            {
                title: "Neptune",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Venus",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Europa",
                ranks: [5, 7, 3, 9]
            },
        ]
    }
]