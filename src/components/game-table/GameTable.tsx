import { useState } from "react"
import { cardDecks } from "../../data/card-decks";
import { ICard } from "../../models/ICard";
import { Card } from "../card/Card";
import { CardContainer } from "../card/CardContainer";
import "./gameTable.css"



const getCardHand = (cards: ICard[], size: number): ICard[] => {
  const hand: ICard[] = [];

  for (let i = 0; i < size; i++) {
    hand.push(cards[i]);
  }

  return hand;
}



interface IState {
  opponentHand: (null | ICard)[],
  board: (null | ICard)[],
  playerHand: (null | ICard)[]
}

const initialState: IState = {
  opponentHand: getCardHand(cardDecks[0].cards, 3),
  board: Array(4).fill(null),
  playerHand: getCardHand(cardDecks[0].cards, 3)
}




export const GameTable = () => {

  const [state, setState] = useState(initialState);

  const onClick = (handType: 'opponentHand' | 'playerHand') => {
    const playableCardIndex = findPlayableCardIndex(state[handType]);
    const emptyBoardCellIndex = findEmptyBoardCellIndex(state.board);
    
    if (playableCardIndex < 0 || emptyBoardCellIndex < 0)
      return;

    const newHand = [...state[handType]];
    const newBoard = [...state.board];
    newHand[playableCardIndex] = null;
    newBoard[emptyBoardCellIndex] = state[handType][playableCardIndex];
    setState({...state, board: newBoard, [handType]: newHand})
  }

  const findPlayableCardIndex = (hand: (null | ICard)[]): number => {
    return hand.findIndex(card => card !== null);
  }

  const findEmptyBoardCellIndex = (board: (null | ICard)[]): number => {
    return board.findIndex(cell => cell === null);
  }

  const sampleCard: ICard = {title: 'Sun', ranks: [2,10,10,3]}

  return (
    <div className="game-table">
      <div className="side-panel">
      <div>{state.opponentHand.map(card => card?.title)}</div>
        <button onClick={() => onClick('opponentHand')}>Play Card</button>
      </div>

      <div className="board-container">
        {state.board.map((cell, i) => <div key={i}>{cell ? <CardContainer><Card {...cell} /></CardContainer> : <CardContainer />}</div>)}
      </div>

      <div className="side-panel">
        <div>{state.playerHand.map(card => card?.title)}</div>
        <button onClick={() => onClick('playerHand')}>Play Card</button>
      </div>
    </div>
  )
}