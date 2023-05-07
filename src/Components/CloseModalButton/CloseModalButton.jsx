import React from 'react'
import './CloseModalButton.css'

const CloseModalButton = ({ closeModal }) => {
  return (

    <button
      className='TodoButton TodoButton--close'
      onClick={closeModal}
    >
      +
    </button>
  )
}

export { CloseModalButton }
