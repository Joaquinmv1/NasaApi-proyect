import React from 'react'
import '../../styles/Header.css'

export const Header = ({ gallery, search, handleChange, buttonSearch, handleSubmit, reset }) => {
  return (
    <>
      <header className='header'>
        <div className="header-container">
          <img className='header-img' src="https://images.nasa.gov/images/landing_bg..jpg" alt="" />
          <div className="header-elements">
            <span className="header-link">NASA Image and <br /> Video Library</span>
            <img src="https://images.nasa.gov/images/nasa_logo-large.png?as=webp" alt="" />
          </div>
          <form onSubmit={(e) => handleSubmit(e, search)} className="header-search">
            <input
              autoFocus
              type="text"
              value={search}
              onChange={handleChange}
              className='header-search-input'
              placeholder='Search for ... (e.g. "Orion")'
            />
            <div className='header-search-elements'>
              <i onClick={reset} className='header-invalid desactivated'></i>
              <i onSubmit={(e) => handleSubmit(e, search)} className='header-search-button desactivated'></i>
            </div>
          </form>
        </div>
        {
          gallery.length !== 0 &&
          <div className="header-btn desactivated">
            {buttonSearch}
          </div>
        }
      </header>
    </>
  )
}
