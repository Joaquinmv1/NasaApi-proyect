import { HeaderContainer } from './Containers/HeaderContainer/HeaderContainer'
import { GalleryItemDetail } from './Containers/GalleryItemDetail/GalleryItemDetail'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HeaderContainer />} />
        <Route path='/gallery' element={<GalleryItemDetail /> } />
      </Routes>
    </>
  )
}

export default App
