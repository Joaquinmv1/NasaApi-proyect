import React, { useState } from 'react'
import '../../styles/Header.css'

export const Header = ({ search, handleChange, buttonSearch, handleSubmit }) => {
    return (
        <>
            <header className='header'>
                <img className='header-img' src="https://images.nasa.gov/images/landing_bg..jpg" alt="" />
                <div className="header-elements">
                    <span className="header-link">NASA Image and <br /> Video Library</span>
                    <img src="https://images.nasa.gov/images/nasa_logo-large.png?as=webp" alt="" />
                </div>
                <form onSubmit={handleSubmit} className="header-search">
                    <input
                        autoFocus
                        type="text"
                        value={search}
                        onChange={handleChange}
                        className='header-search-input'
                        placeholder='Search for ... (e.g. "Orion")'
                    />
                    <div className='header-search-elements'>
                        <i className='header-invalid'></i>
                        <i className='header-search-button'></i>
                    </div>
                </form>
                <div className="header-btn">
                    {buttonSearch}
                </div>
            </header>
        </>
    )
}
