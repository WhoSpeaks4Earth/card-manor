import { ICard } from "../../models/ICard";
import "./card.css";
import { CardRanks } from "./CardRanks";

export const Card = (props: ICard) => {

    return (
        <div className='card'>
            <div className='back'>
                <div className='front'>
                    <div className='header'>
                        <CardRanks ranks={props.ranks} />
                    </div>
                    
                    <div className='footer'>
                        <div className='title'>{props.title}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}