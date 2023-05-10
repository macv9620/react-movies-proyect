import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './HomeButton.css'

const HomeButton = () => {
  const location = useLocation()
  console.log(location)
  if (location.pathname !== '/') {
    return (
      <button
        className='TodoButtonHome'
      >
        <Link to='/'>
          <img className='home-icon' src='https://i.ibb.co/rFZqpK8/home.png' />
        </Link>
      </button>
    )
  }
}

export { HomeButton }
