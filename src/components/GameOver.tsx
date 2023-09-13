import './GameOver.css'

type GameOverProps = {
  retry: () => void;
  }

const GameOver = (props:GameOverProps) => {
return (
  <div>
  <h1>Game</h1>
  <p>Letra</p>
  <button onClick={props.retry}>Finalizar Jogo</button>
  </div>
)
}

export default GameOver

