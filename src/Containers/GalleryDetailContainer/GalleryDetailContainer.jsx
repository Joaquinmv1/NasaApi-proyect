import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import '../../styles/GalleryDetail.css'
import { Footer } from '../../components/Footer/Footer'
import { Loader } from '../../components/Loader/Loader'
import ClipLoader from 'react-spinners/ClipLoader'

export const GalleryDetailContainer = () => {
    const { id } = useParams();
    const url = `https://images-api.nasa.gov/search?nasa_id=${id}`;
    const { data, isLoading } = useFetch(url)

    console.log(data);

    if (isLoading) {
        return <Loader />;
    }

    const image = data[0];
    return (
        <>
            <div className="gallery-detail-header">
                <img className="gallery-detail-background" src="https://images.nasa.gov/images/landing_bg..jpg" alt="" />
            </div>
            <Link to='/' className='gallery-link' >Home - <span>{id}</span></Link>
            <div className="gallery-detail-container">
                <div className="gallery-left">
                    <img className='gallery-detail-img' src={image.links[0].href} alt={image.data[0].title} />
                </div>
                <div className="gallery-right">
                    <button className='gallery-rigth-button'>download</button>
                    <input
                        className='gallery-right-input'
                        type="text"
                        placeholder='images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg'
                    />
                    <hr />
                    <div className="gallery-right-title">
                        {image.data[0].title}
                    </div>
                    <div className='gallery-right-id'>
                        NASA ID: <span>{id}</span>
                    </div>
                    <div className="gallery-right-desc">
                        {image.data[0].description}
                    </div>
                    <div className="gallery-right-date">
                        Date Created: <span>{image.data[0].date_created}</span>
                    </div>
                    <div className="gallery-right-center">
                        Center: <span>{image.data[0].center}</span>
                    </div>
                    <div className="gallery-right-keywords">
                        Keywords: <span>{image.data[0].keywords}</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}