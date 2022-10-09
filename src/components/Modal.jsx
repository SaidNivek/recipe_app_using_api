import React from 'react'
import { useGlobalContext } from '../context'

function Modal() {
  return (
    <aside className='modal-overlay'>
      <div className='modal-container'>
        modal content here
      </div>
    </aside>
  )
}

export default Modal