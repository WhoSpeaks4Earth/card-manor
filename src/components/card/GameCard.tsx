import { ICard, IGameCard } from "../../models/ICard"
import { Card } from "./Card"
import { CardContainer } from "./CardContainer";


export const GameCard = (props: {card: IGameCard | null}) => {

    const card = props.card as ICard;

    const getCss = (): string => {
        let css = '';
        // if (props.card.isPlayerCard)
        //     css = 'player';
        return css;
    }

    return (
        <CardContainer>
            {card ? (
                <div className={getCss()}>
                    <Card {...card} />
                </div>
            ) : null}
        </CardContainer>
    )
}