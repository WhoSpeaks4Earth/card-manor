import { rank } from "../../models/ICard";

export const CardRank = (props: {rank: rank}) => {

    const getRankDisplay = (rank: rank) => {
        return rank === 10 ? 'A' : rank;
    }

    return (
        <>
            {getRankDisplay(props.rank)}
        </>
    )
}