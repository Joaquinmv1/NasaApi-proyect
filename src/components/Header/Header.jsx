import React, { useState } from 'react'
import '../../styles/Header.css'
import { ButtonFilter } from '../ButtonFilter/ButtonFilter'

export const Header = () => {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value)
    }

    return (
        <>
            <section className='header'>
                <img className='header-img' src="https://images.nasa.gov/images/landing_bg..jpg" alt="" />
                <div className="header-elements">
                    <span className="header-link">NASA Image and <br /> Video Library</span>
                    <img src="https://images.nasa.gov/images/nasa_logo-large.png?as=webp" alt="" />
                </div>
                <div className="header-search">
                    <input 
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
                </div>
            </section>
        </>
    )
}
