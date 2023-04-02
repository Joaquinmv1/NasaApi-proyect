import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export const GalleryDetail = ({ id, image }) => {
  return (
    <>
      <header className="gallery-detail-header">
        <div className="gallery-container-navbar">
          <img src="https://images.nasa.gov/images/nasa_logo-large.png?as=webp" alt="" />
          <span className="gallery-header-link">NASA Image and  Video Library</span>
        </div>
      </header>
      <main className="gallery-detail-container">
        <div className="gallery-link-container">
          <Link to='/' className='gallery-link'><span>{image.data[0].title}</span>
          </Link>
        </div>
        <div className="gallery-detail-main">
          <div className="gallery-left">
            <img className='gallery-detail-img' src={image.links[0].href} alt={image.data[0].title} />
            <div className="gallery-left-share">
              <div className='btn-content-share'>
                <button className='btn-share'>show exif data <span className='span-plus'>+</span></button>
              </div>
              <div className='gallery-share-socials'>
                <img src="https://images.nasa.gov/images/icon_share.png?as=webp" alt="" />
                <h3>share this media:</h3>
              </div>
            </div>
            <div className="gallery-icons">
              <ul>
                <li><img src="https://images.nasa.gov/images/badge_pinterest.png?as=webp" alt="" /></li>
                <li><img src="https://images.nasa.gov/images/badge_fb.png?as=webp" alt="" /></li>
                <li><img src="https://images.nasa.gov/images/badge_twitter.png?as=webp" alt="" /></li>
              </ul>
            </div>
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
      </main>
      <Footer />
    </>
  )
}
