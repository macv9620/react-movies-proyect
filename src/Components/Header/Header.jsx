import './Header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header () {
  const [searchValue, setSearchValue] = useState('')
  const catchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const cleanInput = () => {
    setSearchValue('')
  }

  return (
    <header className='main-header'>
      <div className='header-info'>
        <p className='header-info-welcome'>Your-Show</p>
      </div>
      <div className='header-logo'>
        <img src='https://i.ibb.co/37wBJc3/drama.png' className='logo' />
      </div>
      <div className='header-search-bar'>
        <input
          placeholder='Type to Search'
          className='header-search-bar-input'
          type='text'
          name='searchValue'
          value={searchValue}
          onChange={catchValue}
        />
        <Link to={`/search/${searchValue}`}>
          <button
            className='header-search-bar-button'
            onClick={cleanInput}
          >
            <span className='material-symbols-outlined'>search</span>
          </button>
        </Link>
      </div>
    </header>
  )
}

export { Header }
