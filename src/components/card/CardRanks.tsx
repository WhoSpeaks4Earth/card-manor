import { ranks } from '../../models/ICard';
import { CardRank } from './CardRank';
import './ranks.css';


export const CardRanks = (props: {ranks: ranks}) => {

    return (
        <div className='ranks'>
            <div><CardRank rank={props.ranks[0]} /></div>
            <div>
                <div><CardRank rank={props.ranks[3]} /></div>
                <div><CardRank rank={props.ranks[1]} /></div>
            </div>
            <div><CardRank rank={props.ranks[2]} /></div>
        </div>
    )
}