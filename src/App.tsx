import { useState } from 'react'
import './App.css'
import { StartScreen } from './components/StartScreen'
import { wordList } from './data/data'
import Game from './components/Game'
import GameOver from './components/GameOver'
import React from 'react'

const stages = [
  {id: 1, name:"Start"},
  {id: 2, name:"Game"},
  {id: 3, name:"End"}
]


function App() {
 
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordList)
  

  const startGame = () => {
    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }
  
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <>
    {gameStage === "Start" && <StartScreen startGame = {startGame} />}
    {gameStage === "Game" && <Game verifyLetter = {verifyLetter}/>}
    {gameStage === "End" && <GameOver retry={retry} />}
    </>
  )
}

export default App
