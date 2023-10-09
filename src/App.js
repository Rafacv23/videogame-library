import React, { useState } from "react"
import "./styles/App.css"
import Error from "./pages/error"
import Home from "./pages/home.jsx"
import { Routes, Route } from "react-router-dom"
import GameDetails from "./pages/game-details"
import MyGames from "./pages/my-games"
import Header from "./containers/header"
import ScrollToUp from "./components/scroll-to-up"

function App () {
  const [myGames, setMyGames] = useState([])

  const buyGame = (gameDetails) => {
    const isGameAlreadyInMyGames = myGames.some((existingGame) => existingGame.id === gameDetails.id)

    if (isGameAlreadyInMyGames) {
      const updatedGames = myGames.filter((existingGame) => existingGame.id !== gameDetails.id)
      setMyGames(updatedGames)
      console.log("Deleted game:", gameDetails)
    } else {
      setMyGames([...myGames, gameDetails])
      console.log("Buyed Game:", gameDetails)
    }
  }

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store/:page" element={<Home/>}/>
        <Route path="/game/:gameId" element={<GameDetails buyGame={buyGame}/>}/>
        <Route path="/library" element={<MyGames myGames={myGames} />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <ScrollToUp></ScrollToUp>
    </>
  )
}

export default App
