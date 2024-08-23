import { useState } from 'react'


const GamePerson = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'viktor'
    }
  })

  const handleClick = () => {
    setGame({
      ...game, player: {... game.player, name: 'TIMMY'}
    })
  }
  return (
    <div>
      <p>players name is: {game.player.name}</p>
      <button onClick={handleClick}>CHANGE name to TIMMY</button>
    </div>
  )
}

export default GamePerson