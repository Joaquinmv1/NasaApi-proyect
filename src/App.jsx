import React, { useState, useEffect } from 'react';
import { HeaderContainer } from './Containers/HeaderContainer/HeaderContainer'
import { Loader } from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {isLoading
        ? <Loader />
        : <HeaderContainer />
      }
    </>
  )
}

export default App
