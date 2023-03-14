import React, { useState } from 'react'
import '../../styles/Header.css'
import { ButtonFilter } from '../ButtonFilter/ButtonFilter'

export const Header = () => {

    const [active, setActive] = useState(false);

    const className = `btn-filter ${active ? "active" : ""}`

    const handleButtonClick = () => {
        setActive(true)
    }

    return (
        <>
            <section className='header'>
                <img className='header-img' src="https://images.nasa.gov/images/landing_bg..jpg" alt="" />
                <div className="header-elements">
                    <span class="header-link">NASA Image and <br /> Video Library</span>
                    <img src="https://images.nasa.gov/images/nasa_logo-large.png?as=webp" alt="" />
                </div>
                <div className="header-search">
                    <input type="text" className='header-search-input' placeholder='Search for ... (e.g. "Orion")' />
                    <div className='header-search-elements'>
                        <i className='header-invalid'></i>
                        <i className='header-search-button'></i>
                    </div>
                </div>
            </section>
        </>
    )
}
