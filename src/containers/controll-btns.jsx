import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import "../styles/controll-btns.css"

const ControllBtns = () => {
  const { page } = useParams()
  const [pages, setPages] = useState(parseInt(page))

  const upPage = () => {
    setPages(pages + 1)
  }

  const downPage = () => {
    if (pages > 1) {
      setPages(pages - 1)
    }
  }

  return (
    <div className="controll-container">
      <Link className="controll-btn" to={pages === 1 ? "/store" : `/store/${pages - 1}`} onClick={downPage}>
        Back
      </Link>
      <Link className="controll-btn" to={`/store/${pages + 1}`} onClick={upPage}>
        Next
      </Link>
    </div>
  )
}

export default ControllBtns
