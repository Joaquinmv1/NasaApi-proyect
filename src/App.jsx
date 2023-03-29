import React from 'react';
import { HeaderContainer } from './Containers/HeaderContainer/HeaderContainer'
import { Loader } from './components/Loader/Loader';
import {Routes, Route} from 'react-router-dom'
import { GalleryDetailContainer } from './Containers/GalleryDetailContainer/GalleryDetailContainer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HeaderContainer />} />
        <Route path='/gallery/:id' element={<GalleryDetailContainer />} />
      </Routes>
    </>
  )
}

export default App
