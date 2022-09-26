import React, { useContext } from 'react'
import { AppContext } from '../context'

function Meals() {

  const context = useContext(AppContext)

  console.log(context)

  return (
    <>
      <h1>Meals Component</h1>
      <p>{context.name}</p>
    </>
  )
}

export default Meals