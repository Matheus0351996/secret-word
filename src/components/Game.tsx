import './Game.css'
import React from 'react'

type GameProps = {
    verifyLetter: () => void;
    }

const Game = (props:GameProps) => {
  return (
    <div>
    <h1>Game</h1>
    <p>Letra</p>
    <button onClick={props.verifyLetter}>Finalizar Jogo</button>
    </div>
  )
}

export default Game