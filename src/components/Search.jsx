import React, { useState } from 'react'
import { useGlobalContext } from '../context'

function Search() {
  // Grab the setSearchTerm function from global context using destructuring
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext()

  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text) {
      setSearchTerm(text)
    } 
  }

  const handleRandom = () => {
    fetchRandomMeal()
  }

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input className="form-input" type="text" value={text} placeholder='Search for a meal' onChange={handleChange}></input>
        <button className="btn" type="submit">Search</button>
        <button className="btn btn-hipster" type="button" onClick={handleRandom}>Surprise Me!</button>
      </form>
    </header>
  )
}

export default Search