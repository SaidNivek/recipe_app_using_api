import React from 'react'
import { useGlobalContext } from '../context'

function Modal() {
  // Destructure the things passed in from global context that we will need to use
  const { closeModal, selectedMeal } = useGlobalContext()
  // Destructure from the selectedMeal the properties we will need within the modal itself
  const { strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal

  return (
    <aside className='modal-overlay'>
      <div className='modal-container'>
        <img src={image} alt={`image of ${title}`} className='img modal-img' />
        <div className='modal-content'>
          <h4>{title}</h4>
          <a href={source} target="_blank">Original Source</a>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>Close</button>
          <p>Cooking Instructions</p>
          <p>{text}</p>
        </div>
      </div>
    </aside>
  )
}

export default Modal