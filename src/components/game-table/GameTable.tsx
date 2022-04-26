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

  const renderBoardCell = (placedCard: null | ICard) => {
    const content = placedCard ? <Card {...placedCard} /> : null;
    return <CardContainer>{content}</CardContainer>;
  }

  const renderCardInHand = (card: null | ICard) => {
    const content = card ? <Card {...card} /> : null;
    return <CardContainer>{content}</CardContainer>;
  }

  return (
    <div className="game-table">
      <div className="side-panel">
        {state.opponentHand.map((card, i) => <div key={i}>{renderCardInHand(card)}</div>)}
        <button onClick={() => onClick('opponentHand')}>Play Card</button>
      </div>

      <div className="board-container">
        {state.board.map((placedCard, i) => <div key={i}>{renderBoardCell(placedCard)}</div>)}
      </div>

      <div className="side-panel">
      {state.playerHand.map((card, i) => <div key={i}>{renderCardInHand(card)}</div>)}
        <button onClick={() => onClick('playerHand')}>Play Card</button>
      </div>
    </div>
  )
}