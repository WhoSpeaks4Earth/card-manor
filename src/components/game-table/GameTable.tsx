import { useState } from "react"
import { cardDecks } from "../../data/card-decks";
import { ICard, IGameCard } from "../../models/ICard";
import { Card } from "../card/Card";
import { GameCard } from "../card/GameCard";
import "./gameTable.css"



const getCardHand = (cards: ICard[], size: number): IGameCard[] => {
  const hand: IGameCard[] = [];
  for (let i = 0; i < size; i++) {
    hand.push({...cards[i], isPlayerCard: true});
  }
  return hand;
}


type gameCard = null | IGameCard;

interface IState {
  opponentHand: gameCard[],
  board: gameCard[],
  playerHand: gameCard[]
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

  const findPlayableCardIndex = (hand: gameCard[]): number => {
    return hand.findIndex(card => card !== null);
  }

  const findEmptyBoardCellIndex = (board: gameCard[]): number => {
    return board.findIndex(cell => cell === null);
  }

  return (
    <div className="game-table">
      <div className="side-panel">
        {state.opponentHand.map((card, i) => <GameCard key={i} card={card} />)}
        <button onClick={() => onClick('opponentHand')}>Play Card</button>
      </div>

      <div className="board-container">
        {state.board.map((placedCard, i) => <GameCard key={i} card={placedCard} />)}
      </div>

      <div className="side-panel">
      {state.playerHand.map((card, i) => <GameCard key={i} card={card} />)}
        <button onClick={() => onClick('playerHand')}>Play Card</button>
      </div>
    </div>
  )
}