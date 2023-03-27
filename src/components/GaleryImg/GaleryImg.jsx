import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import '../../styles/Header.css'

export const GaleryImg = ({ gallery, onImageClick, reset, showBtn, result }) => {
    return (
        <>
            <div className="back-to-home-container">
                {gallery.length === 0 && <p className='no-found'>No se encontro ningun resultado con {result}</p>}
                {showBtn && <button onClick={reset} className='btn-backToHome'>Volver al Inicio</button>}
            </div>
            <div className="galery-container">
                {
                    gallery.map((item) => (
                        <img
                            className='galery-items'
                            key={item.data[0].nasa_id}
                            src={item.links[0].href}
                            alt={item.data[0].title}
                            onClick={onImageClick}
                        />
                    )
                    )}
            </div>
        </>
    )
}
