import React, { useState } from 'react'
import { useGlobalContext } from '../context'

function Search() {

const [text, setText] = useState('')

const handleChange = (e) => {
  setText(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
}

  return (
    <header className="search-container">
      <form>
        <input className="form-input" type="text" placeholder='Search for a meal' onChange={handleChange}></input>
        <button className="btn" type="submit" onSubmit={handleSubmit}>Search</button>
        <button className="btn btn-hipster" type="button">Surprise Me!</button>
      </form>
    </header>
  )
}

export default Search