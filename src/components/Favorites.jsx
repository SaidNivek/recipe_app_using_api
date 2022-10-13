import React, { useState } from 'react'
import { useGlobalContext } from '../context';

function Favorites() {
  // Grab the items from global context needed for this component
  const {favorites, selectMeal, removeFromFavorites } = useGlobalContext()

  return (
    <section className='favorites'>
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
        {favorites.map((item) => {
          // This will destructure the item each time through the map to easier to use names (idMeal and image)
          const { idMeal, strMealThumb: image, strMeal: title } = item    
          return (
            <div key={idMeal} className="favorite-item">
              <img src={image} alt={`image of ${title}`} className="favorites-img img" />
              <button className="remove-btn" onClick={() => removeFromFavorites(idMeal)}></button>
            </div>
            )
          })}
        </div>
      </div>
  </section>
  )
}

export default Favorites