import React from 'react'
import './ModalDetail.css'
import { useModal } from '../../CustomHooks/useModal'
import { Link } from 'react-router-dom'

const ModalDetail = ({ modalContent }) => {
  const {
    id,
    imgURL,
    name,
    score,
    overview
  } = modalContent

  console.log(modalContent)
  return (
    <div className='movieDetail-modal'>
      <div
        className='modal-background-img'
        style={{
          backgroundImage: `url(${imgURL})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center'
        }}
      >
        <section id='movieDetail' className='movieDetail-container'>
          <h1 className='movieDetail-title'>{name}</h1>
          <span className='movieDetail-score'>{score}</span>
          <p className='movieDetail-description'>
            {overview}
          </p>
          <div className='button-container'>
            <button className='more-detail-button'>
              <Link to={`show-detail/${id}`}>More detail</Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export { ModalDetail }
