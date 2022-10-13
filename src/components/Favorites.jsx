import React, { useState } from 'react'
import { useGlobalContext } from '../context';

function Favorites() {
  // Grab the items from global context needed for this component
  const {favorites, selectMeal, removeFromFavorites } = useGlobalContext()

  return (
    <div>Favorites</div>
  )
}

export default Favorites