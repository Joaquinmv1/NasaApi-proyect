import React from 'react';
import { ImagesContainer } from './Containers/ImagesContainer/ImagesContainer'
import { GalleryDetailContainer } from './Containers/GalleryDetailContainer/GalleryDetailContainer';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ImagesContainer />} />
        <Route path='/gallery/:id' element={<GalleryDetailContainer />} />
      </Routes>
    </>
  )
}

export default App
