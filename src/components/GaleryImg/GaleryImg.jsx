import React from 'react'
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

export const GaleryImg = ({ gallery, onImageClick, reset, showBtn, result, isLoading, showResults }) => {
  return (
    <>
      <div className="back-to-home-container">
        {gallery.length === 0 && showResults  && <p className='no-found'>No se encontro ningun resultado con {result}</p>}
        {showBtn && <button onClick={reset} className='btn-backToHome'>Volver al Inicio</button>}
      </div>
      <div className="galery-container">
        {
          isLoading ? <ClipLoader /> :
            gallery.map((item) => (
              <Link className='galery-link' key={item.data[0].nasa_id} to={`/gallery/${item.data[0].nasa_id}`}>
                <img
                  className='galery-items'
                  src={item.links[0].href}
                  alt={item.data[0].title}
                  onClick={onImageClick}
                />
              </Link>
            )
            )
        }
      </div>
    </>
  )
}
