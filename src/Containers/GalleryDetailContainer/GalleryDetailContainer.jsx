import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { Loader } from '../../components/Loader/Loader'
import { GalleryDetail } from '../../components/GalleryDetail/GalleryDetail'

import '../../styles/GalleryDetail.css'

export const GalleryDetailContainer = () => {
  const { id } = useParams();
  const url = `https://images-api.nasa.gov/search?nasa_id=${id}`;
  const { data, isLoading } = useFetch(url)

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