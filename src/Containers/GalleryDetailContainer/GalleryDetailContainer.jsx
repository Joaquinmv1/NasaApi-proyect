import React from 'react'
import { useParams } from 'react-router-dom'
import { useImages } from '../../hooks/useImages'
import { Loader } from '../../components/Loader/Loader'
import { GalleryDetail } from '../../components/GalleryDetail/GalleryDetail'

import '../../styles/GalleryDetail.css'

export const GalleryDetailContainer = () => {
  const { id } = useParams();
  const url = `https://images-api.nasa.gov/search?nasa_id=${id}`;
  const { data, isLoading } = useImages(url)

  if (isLoading) {
    return <Loader />;
  }

  const image = data[0];
  return (
    <>
      <GalleryDetail id={id} image={image}/>      
    </>
  )
}