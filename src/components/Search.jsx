import React, { useState } from 'react'
import { useGlobalContext } from '../context'

function Search() {
  return (
    <header className="search-container">
      <form>
        <input className="form-input" type="text" placeholder='Search for a meal'></input>
        <button className="btn" type="submit">Search</button>
        <button className="btn btn-hipster" type="button">Surprise Me!</button>
      </form>
    </header>
  )
}

export default Search