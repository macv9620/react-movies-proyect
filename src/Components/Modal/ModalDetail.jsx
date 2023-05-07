import React from 'react'
import './ModalDetail.css'

const ModalDetail = () => {
  return (
    <div className='movieDetail-modal'>
      <div
        className='modal-background-img'
        style={{
          backgroundImage: 'url("https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center'
        }}
      >
        <section id='movieDetail' className='movieDetail-container'>
          <h1 className='movieDetail-title'>Renfield</h1>
          <span className='movieDetail-score'>7.3</span>
          <p className='movieDetail-description'>
            Having grown sick and tired of his centuries as Dracula's lackey,
            Renfield finds a new lease on life — and maybe even redemption — when
            he falls for feisty, perennially angry traffic cop Rebecca Quincy.
          </p>
        </section>
      </div>
    </div>
  )
}

export { ModalDetail }
