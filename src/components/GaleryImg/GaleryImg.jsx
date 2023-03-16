import React from 'react'

export const GaleryImg = ({ gallery, isLoading, onImageClick }) => {
    return (
        <>
            <div className="galery-container">
                {isLoading ? <p>Cargando...</p>
                    : (
                        gallery.map((item) => (
                            <img
                                className='galery-items'
                                key={item.data[0].nasa_id}
                                src={item.links[0].href}
                                alt={item.data[0].title}
                                onClick={onImageClick}
                            />
                        ))
                    )}
            </div>
        </>
    )
}
