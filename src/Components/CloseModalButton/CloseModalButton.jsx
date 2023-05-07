import React from 'react'
import './CloseModalButton.css'

// eslint-disable-next-line react/prop-types
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
