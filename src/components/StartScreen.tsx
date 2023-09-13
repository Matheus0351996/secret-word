import "./StartScreen.css"
import React from 'react'

type StartScreenProps = {
  startGame: () => void;
};



export const StartScreen = (props: StartScreenProps) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique  no botão abaixo para começar a jogar</p>
        <button onClick={props.startGame}>Começar a jogar</button>
    </div>
  )
}
