import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/header.css"
import { getGameById } from "../data"

const Header = () => {
  const [store, setStore] = useState(true)
  const [gameDetails, setGameDetails] = useState(null)
  const [library, setLibrary] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const toggleLibrary = () => {
    setLibrary(!library)
    if (store) {
      setStore(!store)
    }
  }

  const toggleStore = () => {
    setStore(!store)
    if (library) {
      setLibrary(!library)
    }
  }

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = () => {
    const formattedSearchTerm = searchTerm.replace(/\s+/g, "-")
    console.log("Búsqueda realizada: " + formattedSearchTerm)
    window.location.href = `/game/${formattedSearchTerm}`
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  async function fetchGameDetails () {
    try {
      const data = await getGameById(searchTerm)
      const game = data
      setGameDetails(game)
      console.log(gameDetails)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchGameDetails()
  }, [searchTerm])

  return (
    <header className="header">
      <Link to={"/store/1"} onClick={() => toggleStore()} className={store ? "header-btn-active" : "header-btn"}>
        Store
      </Link>
      <Link to={"/library"} onClick={() => toggleLibrary()} className={library ? "header-btn-active" : "header-btn"}>
        Library
      </Link>
      <div className="searching">
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={searchTerm}
          onChange={handleSearchInputChange}
          onKeyPress={handleKeyPress}
        />
        <Link to={`/game/${searchTerm}`} onClick={handleSearch}>Buscar</Link>
      </div>
    </header>
  )
}

export default Header
