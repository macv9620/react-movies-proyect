import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './HomeButton.css'
import homeIcon from '../../assets/home.png'

const HomeButton = () => {
  const location = useLocation()
  console.log(location)
  if (location.pathname !== '/') {
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
}

export { HomeButton }
