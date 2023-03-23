import React from 'react'
import '../../styles/Footer.css'

export const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="footer-left">
                    <img src="https://images.nasa.gov/images/nasa_logo-sm.png?as=webp" alt="" />
                    <div className="footer-description">
                        <p className='footer-p'>
                            <strong>National Aeronautics and Space Administration</strong>
                        </p>
                        <p className='footer-p'>
                            <strong>NASA Official:</strong> NASA Office of Communications
                        </p>
                    </div>
                </div>
                <div className="footer-links">
                    <ul className='footer-ul'>
                        <li className='footer-li'>
                            USAGE GUIDELINES
                        </li>
                        <li className='footer-li'>
                            PRIVACY
                        </li>
                        <li className='footer-li'>
                            FOIA
                        </li>
                        <li className='footer-li'>
                            CONTACT NASA
                        </li>
                        <li className='footer-li'>
                            API DOCS
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
