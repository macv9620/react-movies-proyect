import React from 'react'
import { Link } from 'react-router-dom'
import './HomeButton.css'
import homeIcon from '../../assets/home.png'

const HomeButton = () => {
  return (
    <button
      className='TodoButtonHome'
    >
      <Link to='/'>
        <img className='home-icon' src={homeIcon} />
      </Link>
    </button>
  )
}

export { HomeButton }
