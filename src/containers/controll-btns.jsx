import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import "../styles/controll-btns.css"

const ControllBtns = () => {
  const { page } = useParams()
  const [pages, setPages] = useState(parseInt(page))

  const upPage = () => {
    setPages(pages + 1)
  }

  return (
    <div className="controll-container">
      <Link className="controll-btn" to={page === 1 ? null : `/store/${pages - 1}`}>Back</Link>
      <Link className="controll-btn" to={`/store/${pages + 1}`} onClick={upPage}>
        Next
      </Link>
    </div>
  )
}

export default ControllBtns
